const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateChannelInput = data => {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.link = !isEmpty(data.link) ? data.link : '';

	if (!Validator.isLength(data.name, { min: 3, max: 20 })) {
		errors.name = 'Name must be between 3 and 20 characters';
	}

	if (!Validator.isURL(data.link)) {
		errors.link = 'Link field must be a valid URL';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
