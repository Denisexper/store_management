import mongoose from 'mongoose'


let url = 'mongodb://localhost:27017/Hotel'
const conn = async () => {

    try {
        const connection = mongoose.connect(url)
        console.log("connected to db")
    } catch (error) {
        console.error(error)
    }
}

export default conn;