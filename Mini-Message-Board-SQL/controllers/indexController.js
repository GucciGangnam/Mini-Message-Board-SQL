// IMPORTS 
const db = require("../db/queries");


// GET all messages
exports.get_all_messages = async (req, res, next) => {
    const messages = await db.getAllMessages();
    messages.reverse();
    res.render('index', { title: "Mini Message Board", messages: messages });
}

exports.post_new_message = async (req, res, next) => { 
    const message = req.body.message;
    const name = req.body.name;
    await db.postNewMessage(message, name);
    next();
    res.redirect('/');
}