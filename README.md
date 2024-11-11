# vulnerableWebApp

addimlar:
1. https://nodejs.org/en saytindan "Download Node.js (LTS)"e klikleyin.
2. https://youtu.be/a3HJnbYhXUc?si=KopE7NfqnD-KMQtO videosuna baxaraq MySQL'i qurasdirin.
3. Visual Studio Code'da "EJS language support" extension'ni yukleyin.
4. MySQL Workbench'de asagidaki komandi yazin:
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (username, password) VALUES ('admin', 'password123');
INSERT INTO products (name, description, price) VALUES ('Product1', 'Description1', 10.00);
INSERT INTO products (name, description, price) VALUES ('Product2', 'Description2', 15.00)

5. Son olaraq "node app.js" deyerek run ede bilersiz
