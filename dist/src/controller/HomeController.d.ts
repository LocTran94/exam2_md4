import { Request, Response } from "express";
declare class HomeController {
    private productService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showHomeUser: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: any, res: any) => Promise<void>;
    create: (req: any, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: any, res: any) => Promise<void>;
    showFormRemove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
