import { Router } from 'express';

const helloRoute = Router();

helloRoute.get('/', (request, response) => {
  response.send('hello dev!!!');
});

export default helloRoute;
