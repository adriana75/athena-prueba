"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration the .env file
dotenv_1.default.config();
//Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define the first Route of APP
app.get('/', (req, res) => {
    //Send 200 json
    res.status(200).json({
        "message": "Goodbye, world"
    });
});
app.get('/hello/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    res.status(200).json({
        "message": `Hola, ${nombre}`
    });
});
app.listen(port, () => {
    console.log(`Express server. Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map