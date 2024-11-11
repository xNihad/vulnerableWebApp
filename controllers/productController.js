const db = require('../config/db');

exports.listProducts = (req, res) => {
    const searchTerm = req.query.search || '';
    // Vulnerable to SQL Injection
    const query = `SELECT * FROM products WHERE name LIKE '%${searchTerm}%'`;
    db.query(query, (err, products) => {
        if (err) throw err;
        res.render('products', { products });
    });
};
