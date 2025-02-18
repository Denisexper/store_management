import Movimientos from '../models/stockMovements.js'

class movimientosControll {

    async crearMovimiento(req, res){
        try {
            const { cantidad, producto } = req.body;
            const nuevoMov = await Movimientos.create({cantidad, producto});
            res.status(200).send({
                message: 'Movimiento creado correctamente',
                nuevoMov
            })
        } catch (error) {
            res.status(500).send({
                message: 'Error creando movimiento',
                error: error.message
            })
        }
    }

    async eliminarMovimineto(req, res){
        try {
            const { id } = req.params;
            const movEli = await Movimientos.findByIdAndDelete(id);
            res.status(200).send({
                message: 'Movimiento eliminado correctamente',
            })
        } catch (error) {
            res.status(500).send({
                message: 'Error eliminando el movimiento',
                error: error.message
            })
        }
    }

}

export default movimientosControll;