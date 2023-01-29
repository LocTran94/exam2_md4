"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * 
                    from product  
                        `;
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.productRepository.save(product);
        };
        this.findById = async (id) => {
            let product = await this.productRepository.findOneBy({ idProduct: id });
            return product;
        };
        this.update = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ idProduct: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ idProduct: id }, newProduct);
        };
        this.remove = async (id) => {
            let product = await this.productRepository.findOneBy({ idProduct: id });
            if (!product) {
                return null;
            }
            return this.productRepository.delete({ idProduct: id });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map