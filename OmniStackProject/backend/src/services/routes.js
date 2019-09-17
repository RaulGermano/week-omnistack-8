const express = require('express');
const DevController = require('../controllers/Dev');
const LikeController = require('../controllers/Like');
const DislikeController = require('../controllers/Dislike');

const router = express.Router();

router.get('/dev', DevController.index);

router.post('/dev', DevController.store);

router.post('/dev/:devId/likes', LikeController.store);

router.post('/dev/:devId/dislikes', DislikeController.store);

module.exports = router;
