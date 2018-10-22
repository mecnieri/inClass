const express = require('express');
const path = require("path")
const MoviesController = require("./routes/moviesControllers");
const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, "/public")));
app.use('/api/v1', MoviesController);
// app.use('/api/v1', MoviesController);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

app.listen(3000)