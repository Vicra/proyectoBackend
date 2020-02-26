const dbManager = new (require('../db/dbmanager'));

class OrderService {
    async createOrder(order) {
        const insertOrderSQL =
            `INSERT INTO ordenes (cliente_id) VALUES (${order.cliente_id})`;

        console.log(order);
        const response = await dbManager.execute('wepapi', insertOrderSQL);
        const orderId = response.insertId;

        order.productos.forEach(async producto => {
            const orderProductSQL =
                `INSERT INTO ordenes_productos 
            (orden_id, producto_id, cantidad)
            VALUES
            (${orderId}, ${producto.producto_id}, ${producto.cantidad})`;
            const responseTwo = await dbManager.execute('wepapi', orderProductSQL);
            console.log(responseTwo);
        });

        return orderId;
    }

    async updateOrder(order) {

    }

    async getOrders() {
        const selectSQL = `SELECT * FROM ordenes`;
        return await dbManager.execute('wepapi', selectSQL);
    }
}

module.exports = new OrderService();