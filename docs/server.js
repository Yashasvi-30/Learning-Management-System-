const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); // Import bcryptjs module

const PORT = process.env.PORT || 3000;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'my_database'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database');
        throw err;
    }
    console.log('Connected to MySQL database');
});

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Default file to serve
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Handle user registration endpoint
    if (req.url === '/register' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { userId, password } = JSON.parse(body);

            // Check if user already exists
            db.query('SELECT * FROM users WHERE username = ?', [userId], (err, results) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Database error');
                    throw err;
                }

                if (results.length > 0) {
                    res.writeHead(400);
                    res.end('User already exists');
                } else {
                    // Hash the password using bcrypt
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err) {
                            res.writeHead(500);
                            res.end('Error hashing password');
                            throw err;
                        }

                        // Insert user into database
                        const sql = 'INSERT INTO users (username, password_hash) VALUES (?, ?)';
                        db.query(sql, [userId, hash], (err, result) => {
                            if (err) {
                                res.writeHead(500);
                                res.end('Failed to register user');
                                throw err;
                            } else {
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ message: 'User registered successfully' }));
                            }
                        });
                    });
                }
            });
        });
    } else {
        // Serve static files
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('404 Not Found');
                } else {
                    res.writeHead(500);
                    res.end('500 Internal Server Error');
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
