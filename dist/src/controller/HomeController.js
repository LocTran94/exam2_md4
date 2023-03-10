"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            res.render('home', { products: products });
        };
        this.showHomeUser = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            res.render('homeUser', { products: products });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await this.productService.getAll();
            res.render('products/create');
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    await ProductService_1.default.save(product);
                    res.redirect(301, '/home');
                }
            }
        };
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            res.render('products/edit', { product: product });
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            let newProduct = req.body;
            await this.productService.update(id, newProduct);
            res.redirect(301, '/home');
        };
        this.removeProduct = async (req, res) => {
            let id1 = req.params.id;
            await this.productService.remove(id1);
            res.redirect(301, '/home');
        };
        this.showFormRemove = async (req, res) => {
            const products = await ProductService_1.default.findById(req.params.id);
            let id = req.params.id;
            res.render('products/delete', { id: id, products: products });
        };
        this.productService = ProductService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map