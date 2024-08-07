const pool = require("./pool");


async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    console.log("getting all messages")
    return rows;
}

async function postNewMessage(message, name) {
    try {
        const timestamp = new Date();
        const query = `
            INSERT INTO messages (message, author, timestamp)
            VALUES ($1, $2, $3)
            RETURNING *;`;

        const values = [message, name, timestamp];

        const res = await pool.query(query, values); 
        console.log('Message inserted:', res.rows[0]);

    } catch (err) {
        console.error('Error inserting message:', err);
    }
}


module.exports = {
    getAllMessages,
    postNewMessage,
}