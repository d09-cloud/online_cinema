const express = require('express');

const app = express();
const port = process.env.PORT || 4000

//a
>>>>>>> 8d4eed5 (M)
app.get('/', (req, res) => res.send('Hello, omline_cinema!'));
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
app.get('/about', (req, res) => res.send('About'));
app.listen(port, () => console.log(`Server on port ${port}`));
