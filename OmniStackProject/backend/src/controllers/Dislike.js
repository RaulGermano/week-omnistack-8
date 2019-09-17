const Dev = require('../models/Dev');

module.exports = {
	async store(req, res) {
		const { user } = req.headers;
		const { devId } = req.params;

		const loggedDev = await Dev.findById(user);
		const targetDev = await Dev.findById(devId);

		if (!targetDev) {
			return res.status(400).json({
				error: 'Dev not exists :('
			});
		}

		if (loggedDev.likes.includes(targetDev._id)) {
			loggedDev.likes.pop(targetDev._id);
		}

		if (loggedDev.dislikes.includes(targetDev._id)) {
			return res.json({
				message: 'disliked!'
			});
		}

		loggedDev.dislikes.push(targetDev._id);

		await loggedDev.save();

		return res.json({
			message: `disliked ${targetDev.name}`
		});
	}
};
