import ProductDAO from "../persistence/ProductDAO.js";

const productDAO = ProductDAO.createInstance();

export const getAllProducts = async (req, res) => {
    try {
        const products = await productDAO.findAllElements();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting products", error: error.message });
    };
};

export const createProduct = async (req, res) => {
    try {
        const { image, category, name, price, description } = req.body;
        await productDAO.createProduct(image, category, name, price, description);

        const products = await productDAO.findAllElements();
        res.status(201).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating product", error: error.message });
    };
};

export const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await productDAO.updateElementById(id, req.body);

        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating product", error: error.message });
    };
};

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        await productDAO.deleteElementById(id);

        const products = await productDAO.findAllElements();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting product", error: error.message });
    };
};