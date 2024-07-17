import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
import cors from 'cors';
import path from 'path';
import bookRoute from "./route/useRoute.js"
import workRoute from "./route/workRoute.js";

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
//
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {

}
app.use("/book", bookRoute)
app.use("/users", workRoute)
    //deploy//
if (process.env.NODE_ENV === "production") {
    const dirPath = path.resolve();
    app.use(express.static("frontend/dist"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirPath, "frontend", "dist", "index.html"))
    })
}




app.listen(PORT, () => {
    console.log('working ${PORT}');
})