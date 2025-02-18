import movimientosControll from '../controllers/stockMovements.js'
import express from "express";
const app = express.Router();

const movControlls = new movimientosControll;

app.post('/crear-movimiento/:productId', movControlls.crearMovimiento);
app.delete('/eliminar-movimiento/:id', movControlls.eliminarMovimineto);

export default app;
