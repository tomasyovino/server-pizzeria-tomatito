import OrderDAO from "../persistence/OrderDAO.js";

const orderDAO = OrderDAO.createInstance();

export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderDAO.findAllElements();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting orders", error: error.message });
    };
};

export const createOrder = async (req, res) => {
    try {
        const { products, amount, payMethod } = req.body;
        await orderDAO.createOrder(products, amount, payMethod);

        const orders = await orderDAO.findAllElements();
        res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating order", error: error.message });
    };
};

export const updateOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await orderDAO.updateElementById(id, req.body);

        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ message: "Order not found" });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating order", error: error.message });
    };
};

export const deleteOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        await orderDAO.deleteElementById(id);

        const orders = await orderDAO.findAllElements();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting order", error: error.message });
    };
};