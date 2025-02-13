import usuarioController from "../controllers/usuario.js";
import express from 'express'

const userControll = new usuarioController();

const app = express.Router();

app.post('/crear-usuario', userControll.crearUsuario);
app.get('/obtener-usuarios',  userControll.obtenerUsuarios)
app.get('/obtener-usuario/:id', userControll.obtenerUsuario)
app.put('/editar-usuario/:id', userControll.editarUsuario)

export default app;