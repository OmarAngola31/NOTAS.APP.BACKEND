import express from "express"
import rutasNotas from "./rutas/rutasNotas.js"
import dontenv from "dotenv"
import { conectarDB } from "./configuracion/db.js"
import cors from "cors"
dontenv.config()
const app = express()

app.use(cors(({
    origin: "http://localhost:5173"
})))
app.use(express.json())
app.use('/api/notas' , rutasNotas)

const PUERTO = process.env.PUERTO || 3001

conectarDB()
.then(() => {
    app.listen(PUERTO, () => {
    console.log(`Servidor Levandotado en el Puerto http://localhost:${PUERTO}`)
})
})
