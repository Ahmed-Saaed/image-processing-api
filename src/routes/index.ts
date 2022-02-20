import express from 'express';

const routes = express.Router();

// will be used for the ui
routes.get('/', (req, res) => {
  res.send('Hello, world!');
});

export default routes;
