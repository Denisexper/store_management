import usuario from "../models/userModel.js"

class usuarioController {

    async crearUsuario(req, res){
        try {
            const { nombre, apellido, numero, correo, contraseña } = req.body;
            const nuevousuario = await usuario.create({ nombre, apellido, numero, correo, contraseña});
            res.status(200).send({
                message: 'Usuario creado correctamente',
                nuevousuario
            })
        } catch (error) {
            res.status(500).send({
                message: 'error creado usuario',
                error: error.message
            })
        }
    }
    //
    async obtenerUsuarios (req, res){
        try {
            const todosUsuarios = await usuario.find().select("-__v")
            res.status(200).send({
                message: 'usuarios obtenidos con exito',
                todosUsuarios
            })
        } catch (error) {
            res.status(500).send({
                message: 'error obteniendo usuarios',
                error: error.message
            })
        }
    }

    async obtenerUsuario (req, res){
        try {
            const { id } = req.params;
            const singleUser = await usuario.findById(id);
            res.status(200).send({
                message: 'usuario obtenido con exito',
                singleUser
            })
        } catch (error) {
            res.status(500).send({
                message: 'error obteniendo usuario',
                error: error.message
            })
        }
    }

    async editarUsuario (req, res){
        try {
            const { id } = req.params;
            const { nombre, apellido, numero, correo, contraseña } = req.body;
            const nuevoUser = await usuario.findByIdAndUpdate(id, { nombre, apellido, numero, correo, contraseña }, {new: true})
            res.status(200).send({
                message: 'usuario actulizado correctamente',
                nuevoUser
            })
        } catch (error) {
            req.status(500).send({
                message: 'error actualizando usuario',
                error: error.message
            })
        }
    }
}


export default usuarioController;