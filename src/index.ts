import server from "./server"

const port = process.env.PORT || 4444;

server.listen(port, ()=> {
    console.log(`Servidor en el puerto ${port}`);
})