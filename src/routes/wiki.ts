import express from 'express';
const wikiRouter = express.Router();

// Home page route.
wikiRouter.get('/', (req, res) => {
  res.send('Home Page');
})

// About page route.
wikiRouter.get('/about', (req, res) => {
  res.send('About Page');
})

export default wikiRouter;