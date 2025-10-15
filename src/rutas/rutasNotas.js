import express from "express"
import Nota from "../modelos/modelosNotas.js"
const router = express.Router()

//Obtener Todas las Notas
router.get('/', async (req,res) => {
    try {
        const notas = await Nota.find()
        res.status(200).json(notas)
        console.log('Enviando una Nota')
    } catch (error) {
        console.error("Error Ial guardar las notas", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

//Obtener Una Nota por id
router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const nota = await Nota.findById(id)
        if(!nota) return res.status(404).json({error: "Nota no encontrada"})
        res.status(200).json(nota)
    } catch (error) {
        console.error("Error al obtener la nota por Id", error)
        res.status(500).json("Internal Server Error")
    }
    
})

//Crear Una Nueva Nota
router.post('/', async (req,res) => {
    try {
        const { titulo ,descripcion } = req.body
        const nota = new Nota({titulo,descripcion})
        const guardarNota = await nota.save()
        if (guardarNota) {
            res.status(201).json({mensaje : "Nota creadada correctamente", nota: guardarNota})
        }
            
    } catch (error) {
        console.error("Error al crear la nota", error)
        res.status(500).json({error:"Internal Server Error"})
    }
})

//Eliminar Una Nota
router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const eliminarNota = await Nota.findByIdAndDelete(id)
        if(!eliminarNota) return res.status(404).json({error: "Nota no encontrada"})
        res.status(200).json(eliminarNota)
    } catch (error) {
        console.error("Error al eliminar la nota",error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

//Editat Una Nota
router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const {titulo,descripcion} = req.body
        const actualizarNota = await Nota.findByIdAndUpdate(id, {titulo,descripcion}, {new: true})
        if(!actualizarNota) return res.status(404).json({Error: "Nota no actualizada correctamente"})
        res.status(200).json({mensaje: "Nota actualizada correctamente", nota:actualizarNota})    
    } catch (error) {
        console.error("No se pudo editar la nota", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})


export default router