const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/page.html`);
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});
