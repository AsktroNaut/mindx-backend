const express = require('express');
const port = 5000;
const app = express();
const mangaRouter = require('./router/mangaRouter')
const userRouter = require('./router/userRouter')



app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api/manga', mangaRouter)
app.use('/user', userRouter)
app.listen(port)

