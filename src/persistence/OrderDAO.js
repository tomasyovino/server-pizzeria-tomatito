import DAOContainer from "./DAOContainer.js";
import { OrderModel } from "../models/Order.js";

let instance = null;

class OrderDAO extends DAOContainer {
    constructor() {
        super(OrderModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new OrderDAO();
        };
        return instance;
    };

    async createOrder(products, amount, payMethod) {
        const newOrder = new OrderModel({
            products,
            amount,
            payMethod
        });

        const order = await newOrder.save();
        return order;
    }
};

export default OrderDAO;