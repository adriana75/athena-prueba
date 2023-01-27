import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000

//Define the first Route of APP
app.get('/', (req: Request, res: Response) =>{

    //Send 200 json
    res.status(200).json(
        {
            "message": "Goodbye, world"
        }
    )
})

app.get('/hello/:nombre', (req: Request, res: Response) =>{

    let nombre = req.params.nombre;
    res.status(200).json(
        {
            "message": `Hola, ${nombre}`
        }
    )
})


app.listen(port, ()=>{
    console.log(`Express server. Running at http://localhost:${port}`)
})
