import {Request, Response} from "express";
import UserService from "../service/UserService";
import homeController from "./HomeController";

class UserController {
    private userService;

    constructor() {
        this.userService = UserService
    }

    showFormLogin = async (req: Request, res: Response) => {
        await UserService.getAll();
        res.render('../views/login')
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);
        let user1 = req.body.password;
        if (user.name === req.body.name) {
            if (user.name === 'admin') {
                if (user.password === 123456) {
                    await homeController.showHome(req, res)
                } else {
                    res.redirect('/login')
                }
            } else {

                if (user.password == user1) {
                    await homeController.showHomeUser(req, res)
                } else {
                    res.redirect('/login')
                }
            }
        } else {
            res.redirect(301, '/users/login');
        }
    }


}

export default new UserController();