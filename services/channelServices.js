const Channel = require('../models/Channel');
const validateChannelInput = require('./validation/channel');

const channelService = {};

//get all channels
channelService.getAll = (req, res) => {
	Channel.find()
		.sort({ date: -1 })
		.then(channels => res.json(channels))
		.catch(err => res.status(404).json({ noChannelsFound: 'No channeles found' }));
};

//get one channel by id
channelService.getOne = (req, res) => {
	Channel.findById(req.params.id)
		.then(channel => res.json(channel))
		.catch(err => res.status(404).json({ noChannelFound: 'No channel find with that id' }));
};

//add new channel
channelService.addOne = (req, res) => {
	const { errors, isValid } = validateChannelInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	} else {
		const newChannel = new Channel({
			name: req.body.name,
			link: req.body.link,
			rating: req.body.rating
		});

		newChannel.save().then(channel => res.json(channel));
	}
};

//

channelService.deleteOne = (req, res) => {
	Channel.findById(req.params.id)
		.then(channel => {
			channel.remove().then(() => {
				res.json({ success: true });
			});
		})
		.catch(err => {
			res.status(404).json({ success: false });
		});
};

module.exports = channelService;
