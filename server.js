const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Route to handle POST requests
app.post('/receive-word', (req, res) => {
  const { word } = req.body;
  console.log(`Received word: ${word}`);
  res.send('Word received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});