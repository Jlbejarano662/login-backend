import app from "./src/app.js";
import "./src/database.js"
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000


app.listen(PORT);
console.log("server listen on port " + PORT);
