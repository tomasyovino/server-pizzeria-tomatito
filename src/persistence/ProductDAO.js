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
};

export default ProductDAO;