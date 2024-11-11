const db = require('../config/db');

exports.getProducts = (searchTerm, callback) => {
    const query = `SELECT * FROM products WHERE name LIKE '%${searchTerm}%'`;
    db.query(query, callback);
};
