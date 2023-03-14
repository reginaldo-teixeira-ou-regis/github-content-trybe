const express = require('express');
const readJsonData = require('./utils/fs/readJsonData');
const writeJsonData = require('./utils/fs/writeJsonData');

const app = express();

const moviesJSON = './src/movies.json';

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readJsonData(moviesJSON);
    const listedMovie = movies.find((movie) => movie.id === Number(id));

    if (!listedMovie) {
        res.status(404).json({ message: 'Filme não encontrado' });
    }

    res.status(200).json(listedMovie);
});

app.get('/movies', async (req, res) => {
    const movies = await readJsonData(moviesJSON);
    if (!movies) {
        res.status(500).json({ message: 'Filmes não encontrados.' });
    }

    res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
    const movies = await readJsonData(moviesJSON);
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    movies.push(newMovie);
    await writeJsonData(moviesJSON, movies);

    res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
    const movies = await readJsonData(moviesJSON);
    const { id } = req.params;
    const { movie, price } = req.body;

    const movieIndex = movies.findIndex((movieObj) => movieObj.id === Number(id));
    movies[movieIndex].movie = movie;
    movies[movieIndex].price = price;

    await writeJsonData(moviesJSON, movies);

    res.status(200).json(movies[movieIndex]);
});

app.delete('/movies/:id', async (req, res) => {
    const movies = await readJsonData(moviesJSON);
    const { id } = req.params;

    const movieIndex = movies.findIndex((movieObj) => movieObj.id === Number(id));
    movies.splice(movieIndex, 1);
    await writeJsonData(moviesJSON, movies);

    res.status(200).json({ message: 'Filme deletado com sucesso' });
});

module.exports = app;