import "dotenv/config"
import express from "express"

const flashcard = {
    front: "hello",
    back: "hola"
}

const app = express()

app.get("/", (req, res) => {
    res.json(flashcard)
})


app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`)
})