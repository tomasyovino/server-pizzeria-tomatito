import DAOContainer from "./DAOContainer.js";
import { ProductModel } from "../models/Product.js";

let instance = null;

class ProductDAO extends DAOContainer {
    constructor() {
        super(ProductModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new ProductDAO();
        };
        return instance;
    };

    async createProduct(image, category, name, price, description) {
        const newProduct = new ProductModel({
            image,
            category,
            name,
            price,
            description
        });

        const product = await newProduct.save();
        return product;
    };
};

export default ProductDAO;