const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to receive the word from C# app
app.post('/send-word', (req, res) => {
    const word = req.body.word;
    console.log('Received word:', word);
    res.send(`Word received: ${word}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});