import "dotenv/config"
import express from "express"
import routes from "./routes/routes.js"

const flashcard = {
    front: "hello",
    back: "hola"
}

const app = express()

app.use("/api/flashcards", routes)


app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`)
})