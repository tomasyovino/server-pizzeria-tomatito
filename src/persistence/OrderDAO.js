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
};

export default OrderDAO;