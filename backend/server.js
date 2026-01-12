import "dotenv/config"
import express from "express"
import routes from "./routes/routes.js"
import mongoose from "mongoose"

const port = process.env.PORT
const mongodb = process.env.MONGO_URI

const flashcard = {
    front: "hello",
    back: "hola"
}

const app = express()
app.use(express.json())

app.use("/api/flashcards", routes)

mongoose.connect(mongodb)
    .then(() => {
        app.listen(port, () => {
            console.log(`running on port ${port} and connected to DB`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
