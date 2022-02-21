import express from 'express';

const routes = express.Router();

// will be used for the ui
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello, world!');
});

export default routes;
