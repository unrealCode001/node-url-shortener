//required packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const shorten = require('./models/shorten');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kevin:root@project.zo0wg.mongodb.net/short_list?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// setting up view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

// rendering table of full and short urls
app.get('/', async(req, res) => {
  const short_urls = await shorten.find();
  res.render('index', {short_urls: short_urls});
});

// creating new short url and redirecting back to main page
app.post('/short_url', async(req, res) => {
  await shorten.create({ full: req.body.full_url,
  len: req.body.full_url.length});
  res.redirect('/');
});

// direct to full url from short url and updating the number of clicks
app.get('/:short_urls', async(req, res) => {
  const short_url = await shorten.findOne({short: req.params.short_urls})
  if (short_url == null) {
    return res.sendStatus(404)
  }
  short_url.clicks++;
  short_url.save();
  res.redirect(short_url.full);
})

// listening to port
app.listen(process.env.PORT || 8000);

