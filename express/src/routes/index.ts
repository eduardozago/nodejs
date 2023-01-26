import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res:Response) => { 
    let user: string = 'John';   
    res.render('pages/home', {
        user: user,
        products: [
            {title: 'Product 1', price: 16},
            {title: 'Product 2', price: 8},
            {title: 'Product 3', price: 20}
        ]
    }); 
});

router.get('/user/:id', (req: Request, res:Response) => {
    let id:string = req.params.id;    
    res.send(`User ${id}`);
});

router.get('/form', (req: Request, res: Response) => {
    let name: string = req.query.name as string;
    let age: string = req.query.age as string;
    res.render('pages/form', {name, age});
});

router.post('/form-post', (req: Request, res: Response) => {
    let name: string = req.body.name as string;
    let age: string = req.body.age as string;

    res.render('pages/form-post', { name, age });
});

export default router;