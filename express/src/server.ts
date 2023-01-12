import express, { Request, Response } from 'express';
import path from 'path';
import routes from './routes';

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use(routes);
// server.use('/', routes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Page not found');
});

server.listen(3000);