import { Router } from "express";
import { crearInstancia, getAllInstancias, getInstanciaById } from "./controller/InsController";
import upload from "./middelware/upload";

const router = Router();

router.post("/", upload.array("imagenes", 6), crearInstancia);

router.get("/", getAllInstancias);

router.get("/:id", getInstanciaById);

export default router