import express from 'express';
import images from './routes/image';

const app: express.Application = express();
const port = 3000;

app.use('/api', images);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
