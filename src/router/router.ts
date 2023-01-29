import {Router} from "express";
import {productRouter} from "./product-router";
import {userRouter} from "./user-router";
import HomeController from "../controller/HomeController";
import UserController from "../controller/UserController";


export const router = Router();
router.get('/login', UserController.showFormLogin);
router.post('/login', UserController.login);
router.get('/home', HomeController.showHome);
router.get('/homeUser', HomeController.showHomeUser);

router.use('/products', productRouter);
router.use('/users', userRouter);