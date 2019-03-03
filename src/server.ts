import express from 'express';
import setRoutes from './routes';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3001;

// set the routes
setRoutes(app);

app.listen(port, (err: Error) => {
  if (err) {
    console.error(err);
  } else {
    console.log('NODE_ENV =', port);
  }
});