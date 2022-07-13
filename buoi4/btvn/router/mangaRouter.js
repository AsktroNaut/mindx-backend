const express = require('express');
const mangaRouter = express.Router();

const mangas = [
    {id: 1, name: 'bay ngoc rong'},
    {id: 2, name: 'Doraemon '},
    {id: 3, name: 'Conan'},
]



mangaRouter.get('/', (req, res) => {
    res.send(mangas)
})

mangaRouter.post('/', (req, res) => {
    const newManga = {
        id: Number(Date.now()),
        name: req.body.name,
    }
    
    mangas.push(newManga)
    res.send(mangas)

})

mangaRouter.put('/', (req, res) => {
    const updateManga = {
        id: req.body.id,
        name: req.body.name
    }
    mangas.map(manga => {
        if (manga.id == updateManga.id) {
            return manga.name = updateManga.name
        }
    })
    res.send(mangas)
})

mangaRouter.delete('/', (req, res) => {
    let newMangaList = mangas.filter(manga => {
        return manga.id != req.body.id
    })
    res.send(newMangaList)

})

module.exports = mangaRouter;