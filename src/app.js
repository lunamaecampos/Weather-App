const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//define paths for Expres config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


//routes
app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'Luna C'
  })
})

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About Me',
    name: 'Luna C'
  })
})

app.get('/help', (req, res)=>{
  res.render('help', {
    message: 'hello do u need help',
    title: 'Help',
    name: 'Luna C'
  })
})

app.get('/weather', (req, res)=>{
  if(!req.query.address){
    return res.send({
      error: 'You must provide an address'
    })
  }
  res.send({
    forcast: 'forecast',
    location: 'Los Angeles',
    address: req.query.address
  })
})

app.get('/products', (req, res)=>{
  if(!req.query.search){
    return res.send({
      error: 'You must provide a search term'
    })
  }
  res.send({
    products: []
  })
})


app.get('/help/*', (req, res)=>{
  res.render('Help 404', {
    title: '404',
    error: 'Help article not found'
  })
})

app.get('*', (req, res)=>{
  res.render('404', {
    title: '404',
    error: 'Page not found'
  })
})


app.listen('3000', ()=>{
  console.log('server up is up on port 3000');
});
