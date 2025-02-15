import Productos from "../models/productModel.js";

class product {

    async crearProducto (req, res){
        try {
            const { nombre, precio, descripcion, stock, fechaCreacion } = req.body;
            const pro = await Productos.create({nombre, precio, descripcion, stock, fechaCreacion});
            res.status(200).send({
                message: 'Producto creado',
                pro
            })
        } catch (error) {
            res.status(500).send({
                message: 'error creando producto',
                error: error.message
            })
        }
    }

}

export default product;