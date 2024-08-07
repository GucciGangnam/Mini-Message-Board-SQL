// IMPORTS 
const db = require("../db/queries");


// GET all messages
exports.get_all_messages = async (req, res, next) => {
    const messages = await db.getAllMessages();
    console.log(messages);
    res.render('index', { title: "Mini Message Board", messages: messages });
}