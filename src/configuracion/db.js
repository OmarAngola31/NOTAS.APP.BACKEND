import mongoose, { Mongoose } from "mongoose"
export const conectarDB = async () => {
    try {
        const dbURL = process.env.MONGODB_URL
        mongoose.connect(dbURL)
        console.log("MONGO DB CONECTADO CORRECTAMENTE")
        
    } catch (error) {
        console.error("Error al conectar con MONGO DB", error)
        process.exit(1)
    }
    mongoose
}