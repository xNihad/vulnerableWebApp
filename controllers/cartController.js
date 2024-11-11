const db = require('../config/db');

exports.addToCart = (req, res) => {
    if (!req.session.user) return res.redirect('/auth/login');
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    // CSRF Vulnerability
    const query = `INSERT INTO cart (user_id, product_id, quantity) VALUES (${req.session.user.id}, ${productId}, ${quantity})`;
    db.query(query, (err) => {
        if (err) throw err;
        res.redirect('/cart');
    });
};
