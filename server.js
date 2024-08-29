const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.post('/send-word', (req, res) => {
    const word = req.body.word;
    console.log('Received word:', word);
    res.send(`Word received: ${word}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});