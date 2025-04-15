import { Request, Response } from 'express';
import Instacia from "../models/INS-Model"

interface CloudinaryFile extends Express.Multer.File {
    path: string;
}

export const crearInstancia = async (
    req: Request<any, any, any, any> & { files: CloudinaryFile[] },
    res: Response
) => {
    try {
        const { nameParroquia, contenidoFull, contenidoPre } = req.body;
        const imagenes = req.files.map(file => file.path); 

        const nuevaInstancia = new Instacia({
            nameParroquia,
            contenidoFull,
            contenidoPre,
            imagenes
        });

        await nuevaInstancia.save();
        res.status(201).json(nuevaInstancia);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la instancia' });
    }
};

export const getAllInstancias = async (req: Request, res: Response) => {
    try {
        const instancias = await Instacia.find({});
        res.json(instancias);;
    } catch (error) {
        console.log(error);
    }
}

export const getInstanciaById = async (req: Request, res: Response) => {
    const id = req.params.id;
        
    try {
        const project = await Instacia.findById(id);
        if (!project) {
            res.status(404).json({ errors: "Proyecto no encontrado" });
            return
        }
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}