import app from "./app";
import "./database"

require('dotenv').config({ path: '.env'});
const PORT = process.env.PORT || 3000


app.listen(PORT);
console.log("server listen on port " + PORT);
