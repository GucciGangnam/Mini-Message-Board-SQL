const pool = require("./pool");


async function getAllMessages(){ 
    const {rows} = await pool.query("SELECT * FROM messages")
    console.log("getting all messages")
    return rows;
}


module.exports = { 
    getAllMessages,
}