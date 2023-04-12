const express = require('express')
const names = require('./models/names');

const app = express();
const PORT = 3000;

app.set('view engine', 'jsx')

app.engine('jsx', require('jsx-view-engine').createEngine())

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
res.send(`<h1> Hello</h1>`)
})

app.get('/names/:id', (req, res) => {
    console.log(req.params);

})

app.get('/home', function (req, res) {
res.render('A')
// res.send(`<h1> Hello1</h1>`)
})

app.get('/contact', function (req, res) {
    res.render('B')
})

app.get('/home/:name/:city', (req, res) => {
    const { name, city } = req.params
    res.send(`Hello my name is ${name} and I am from ${city}.`)
})

app.get('/names', function (req, res) {
    res.send(names);
})

app.get('/names/:indexOfNameArray', (req, res) => {
    // console.log(req.params)
res.send(names[req.params.indexOfNameArray ])
})

app.get('/firstcontact', (req, res) => {
res.send(names[0])
})

app.get('/secondcontact', (req, res) => {
res.send(names[2])
})

app.get('/names/:id', (req, res) => {
res.send(names[req.params.indexOfNameArray])
})



app.listen(PORT, function () {
    console.log(`Server is running at ${PORT}`)
});