import express from 'express'
import conn from './config/connect.js';
import userRoutes from '../src/routes/usuario.js'

const app = express();

app.use(express.json());

let port = process.env.port || 3000;

app.listen( port, () => {
    console.log(`server is running at port ${port}`)
})

conn();

app.use('/api', userRoutes)