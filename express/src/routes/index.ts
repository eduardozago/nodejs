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

export default router;