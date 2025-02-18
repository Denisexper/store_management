import express from 'express'
import product from "../controllers/productos.js";

const Product = new product;

const app = express.Router();

app.post('/crear-producto', Product.crearProducto);
app.get('/obtener-productos', Product.obtenerProductos);
app.get('/obtener-producto/:id', Product.obtenerProducto);
app.put('/actualizar-producto/:id', Product.actualizarProducto);
app.delete('/eliminar-producto/:id', Product.eliminarProducto);

export default app;          