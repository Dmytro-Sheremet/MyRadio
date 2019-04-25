const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const users = require('./routes/users');
const channels = require('./routes/channels');

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB Connected...');
	})
	.catch(err => {
		console.log(err);
	});

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/users', users);
app.use('/channels', channels);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.get('/*', (req, res) =>
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')),
	);
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
