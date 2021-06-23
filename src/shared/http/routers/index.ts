import { Router } from 'express';
import helloRoute from './hello.router';

const routes = Router();
routes.use('/hello', helloRoute);

export default routes;
