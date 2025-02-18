import mongoose, { Schema } from "mongoose";

const movimientoSchema = new mongoose.Schema({
    type: String,
    cantidad: Number,
    preoducto:{
        type: Schema.Types.ObjectId, ref: 'Productos'
    }
})

const Movimientos = mongoose.model("Movimientos", movimientoSchema)
export default Movimientos;