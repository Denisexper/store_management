import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        trim: true
    },
    stock: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    imagen: Buffer
})

const Productos = mongoose.model('Productos', productSchema)
export default Productos