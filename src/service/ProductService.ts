import {Product} from "../model/product";
import {AppDataSource} from "../data-source";


class ProductService {
    private productRepository
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    getAll = async () => {
        let sql = `select * 
                    from product  
                        `
        let products = await this.productRepository.query(sql)
        return products;

    }

    save = async (product) => {
        return this.productRepository.save(product);
    }

    findById = async (id) => {
        let product = await this.productRepository.findOneBy({idProduct: id});
        return product;
    }

    update = async (id, newProduct) => {
        let product = await this.productRepository.findOneBy({idProduct: id});
        if (!product) {
            return null;
        }
        return this.productRepository.update({idProduct: id}, newProduct);
    }

    remove = async (id) => {

        let product = await this.productRepository.findOneBy({idProduct: id});
        if (!product) {
            return null;
        }
        return this.productRepository.delete({idProduct: id});
    }

    // searchProduct = async (product) => {
    //     const $regex = escapeStringRegexp({ name: product});
    //     const docs = await Product.find({ name: { $regex } });
    // }
}

export default new ProductService();