const express = require('express');
const app = express();

const PORT = 82;

app.get('/', (req, res) => {
    res.send('Hello, Node.jsss!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
