const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
// Middleware to parse JSON bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Initialize file-based SQLite database
const db = new sqlite3.Database('books.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, titleTEXT, author TEXT)', (err) => {
        if (err) {
            console.error(err.message);
        }
    });
}
});
// Handle root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

 


// API Endpoint: Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    db.run(`INSERT INTO books (title, author) VALUES (?, ?)`, [title, author],
        function (err) {
            if (err) {
                res.status(400).send(`Error adding book: ${err.message}`);
                return;
            }
            res.send(`A book has been added with ID ${this.lastID}`);
        });
});
// API Endpoint: Get all books
app.get('/books', (req, res) => {
    db.all(`SELECT * FROM books`, [], (err, rows) => {
        if (err) {
            res.status(500).send(`Error retrieving books: ${err.message}`);
            return;
        }
        res.json(rows);
    });
});
// API Endpoint: Delete a book
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM books WHERE id = ?`, id, function (err) {
        if (err) {
            res.status(400).send(`Error deleting book: ${err.message}`);
            return;
        }
        if (this.changes === 0) {
            res.send(`No book found with ID: ${id}`);
        } else {
            res.send(`Book deleted with ID: ${id}`);
        }
    });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});