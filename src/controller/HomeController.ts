import {Request, Response} from "express";
import productService from "../service/ProductService";
// import categoryService from "../service/CategoryService";

class HomeController {
    private productService;
    // private categoryService;

    constructor() {
        this.productService = productService;
    //     this.categoryService = categoryService;
     }

    showHome = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        res.render('home', {products: products})
    }

    showHomeUser = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        res.render('homeUser', {products: products})
    }

    showFormCreate = async (req , res) => {
        let categories = await this.productService.getAll();
        res.render('products/create');
    }

    create = async (req, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productService.save(product);
                res.redirect(301, '/home');
            }
        }
    }

    showFormEdit = async (req: Request, res: Response) => {

        let id = req.params.id;

        let product = await this.productService.findById(id);
        res.render('products/edit', {product: product});
    }

    updateProduct = async (req: Request, res: Response) => {

        let id = req.params.id;
        let newProduct = req.body;
        await this.productService.update(id, newProduct);
        res.redirect(301, '/home');
    }

    removeProduct = async (req, res) => {
        let id1 = req.params.id;
        await this.productService.remove(id1);
        res.redirect(301, '/home');

    }

    showFormRemove = async (req:Request, res:Response) => {
        const products = await  productService.findById(req.params.id)

        let id = req.params.id;
        res.render('products/delete', {id: id, products: products});

    }

}

export default new HomeController();