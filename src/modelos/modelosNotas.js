import mongoose from "mongoose";
const notaEsquema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
}, {timestamps: true})

const Nota = new mongoose.model("Nota",notaEsquema)
export default Nota