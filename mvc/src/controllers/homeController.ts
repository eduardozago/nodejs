import { Request, Response } from "express";
import { User } from '../models/User';

export const home = (req: Request, res: Response) => {

    let user = User.getUserByName('Jhon');

    res.render('pages/home', user[0]);
}
