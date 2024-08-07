var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', index_controller.get_all_messages);

/* POST new message. */
router.post('/newmessage', index_controller.post_new_message, index_controller.get_all_messages);



module.exports = router;
