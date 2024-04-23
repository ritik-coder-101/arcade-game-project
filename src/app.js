const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.get('/home', (req, res) => {
    res.sendFile(path.join(staticPath, 'home.html'));
});

app.get('/gallary', (req, res) => {
    res.sendFile(path.join(staticPath, 'gallary.html'));
});

app.get('/query', (req, res) => {
    res.sendFile(path.join(staticPath, 'query.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
