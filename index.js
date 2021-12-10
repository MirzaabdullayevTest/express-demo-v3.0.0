const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.send('Hello express js')
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.render('index', {
        title: 'First pugJS'
    })
})

app.set('view engine', 'pug')

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        arr: [1, 2, 3, 4, 56, 6]
    })
})

app.get('/books', (req, res) => {
    // res.send(JSON.stringify(['Rich dad and poor dad', 'Rework', 'From A to Z']))
    res.sendFile(path.join(__dirname, 'books.html'))
})

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})