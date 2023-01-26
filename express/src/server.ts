import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';

import routes from './routes';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// Enables getting data in the request body
server.use(express.urlencoded({ extended: true }));

server.use(routes);
// server.use('/', routes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Page not found');
});

server.listen(3000);