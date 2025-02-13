import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    numero: String,
    correo: String,
    contraseña: String
})

const usuario = mongoose.model('usuario', userSchema);
export default usuario;