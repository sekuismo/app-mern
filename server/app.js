import express from "express";
import fileUpload from "express-fileupload";
import postRoutes from "./routes/post.routes.js";
import {dirname,join} from 'path'
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
console.log(__dirname)

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'./upload'
}))
app.use(postRoutes);

app.use(express.static(join(__dirname,'../client/build')))

export default app


// pass vEbMBtbiPgKTYJTP