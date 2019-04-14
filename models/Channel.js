const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creat Schema
const ChannelSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: false
	},
	about: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Channel = mongoose.model('channel', ChannelSchema);
