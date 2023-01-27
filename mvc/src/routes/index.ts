import { Router, Request, Response } from "express";
import { home } from '../controllers/homeController';
import { contact, aboutus } from '../controllers/infoController';

const router = Router();

router.get('/', home);

router.get('/contact', contact);
router.get('/about-us', aboutus);

export default router;