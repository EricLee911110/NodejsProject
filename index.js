const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
app.use(express.static('public'));

app.get('/', async (request, response) => {

    response.send( await readFile('./animated-grid.html', 'utf-8') )
})

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`));