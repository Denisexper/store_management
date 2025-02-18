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

    async obtenerProductos (res){
        try {
            const productos = await Productos.find();
            res.status(200).send({
                message: 'Productos obtenidos con exito',
                productos
            })
        } catch (error) {
            res.status(500).send({
                message: 'Error obteniendo productos',
                error: error.message
            })
        }
    }

    async obtenerProducto (req, res){
        try {
            const { id } = req.params;
            const producto = await Productos.findById(id);
            res.status(200).send({
                message: 'Producto obtenido con exito',
                producto
            })
        } catch (error) {
            res.status(500).send({
                message: 'error obteniendo producto',
                erro: error.message
            })
        }
    }

    async actualizarProducto (req, res){
        try {
            const { nombre, precio, descripcion, stock, fechaCreacion } = req.body;
            const newProducto = await Productos.findByIdAndUpdateJ(id, {nombre, precio, descripcion, stock, fechaCreacion}, {new: true});
            res.status(200).send({
                message: 'Producto actualizado correctamente',
                newProducto
            }) 
        } catch (error) {
            res.status(500).send({
                message: 'Error actualizando producto',
                error: error.message
            })
        }
    }

    async eliminarProducto (req, res){
        try {
            const { id } = req.params;
            const prod = await Productos.findByIdAndDelete(id);
            res.status(200).send({
                message: 'producto eliminado con exito'
            })
        } catch (error) {
            res.status(500).send({
                message: 'Error eliminando el producto',
                error: error.message
            })
        }
    }

}

export default product;