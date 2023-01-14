import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res:Response) => { 
    let user: string = 'John';   
    res.render('home', {
        user: user
    });
});

router.get('/user/:id', (req: Request, res:Response) => {
    let id:string = req.params.id;    
    res.send(`User ${id}`);
});

export default router;