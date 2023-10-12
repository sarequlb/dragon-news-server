const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const news = require('./data/news.json')

app.use(cors())

const categories = require('./data/categories.json')
app.get('/', (req, res)=>{
    res.send('news api running')
})

app.get('/news', (req,res)=>{
    res.send(news)
})

app.get('/news/:id', (req,res) =>{
    const id  = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.get('/news-categories', (req, res)=>{
    res.send(categories)
})

app.get('/category/:id', (req,res) =>{
    const id = req.params.id
    if(id === '08'){
        res.send(news)
    }
    const categoryNews = news.filter(n => n.category_id === id)
    res.send(categoryNews)
})

app.listen(port, () => console.log('dragon news server running' ))