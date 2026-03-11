import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor Node corriendo en http://localhost:${PORT}`));
