"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const HomeController_1 = __importDefault(require("./HomeController"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await UserService_1.default.getAll();
            res.render('../views/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            let user1 = req.body.password;
            if (user.name === req.body.name) {
                if (user.name === 'admin') {
                    if (user.password === 123456) {
                        await HomeController_1.default.showHome(req, res);
                    }
                    else {
                        res.redirect('/login');
                    }
                }
                else {
                    if (user.password == user1) {
                        await HomeController_1.default.showHomeUser(req, res);
                    }
                    else {
                        res.redirect('/login');
                    }
                }
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map