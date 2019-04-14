const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');

// UserModel
const User = require('../models/User');

// Load Input Validation
const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');

const userServices = {};

//Register User
userServices.Register = (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			errors.email = 'email already exist';
			return res.status(400).json(errors);
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err.message));
				});
			});
		}
	});
};

userServices.Login = (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	//find user  by email
	User.findOne({ email }).then(user => {
		//check fo user
		if (!user) {
			errors.email = 'user not found';
			return res.status(400).json(errors);
		}

		//check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// res.json({ msg: 'Success' });
				const payload = { id: user.id, name: user.name };
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token
						});
					}
				);
			} else {
				errors.password = 'password incorrect';
				return res.status(400).json(errors);
			}
		});
	});
};

userServices.Current = (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	});
};

userServices.checkPassport = passport.authenticate('jwt', { session: false });

module.exports = userServices;
