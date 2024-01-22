//Create web server for comment
const express = require('express');
const app = express();
app.use(express.json());

let comments = []; // This will store our comments

// Endpoint to get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to post a new comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json({ message: 'Comment added successfully' });
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
