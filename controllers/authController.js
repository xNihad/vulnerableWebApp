const db = require('../config/db');

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    
    // Vulnerable to SQL Injection
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    // const query = `SELECT * FROM users WHERE username = 'nihad ' OR '1'='1' AND password = '${password}'`;

    db.query(query, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            req.session.user = results[0];
            res.redirect('/products');
        } else {
            res.send('Login failed');
        }
    });
};
