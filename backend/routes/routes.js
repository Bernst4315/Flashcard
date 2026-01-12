import express from 'express'
import decks from '../models/deck.js'

const routes = express.Router()

routes.get('/', (req,res) => {
    res.json({mssg: "get res successful"})
})

routes.post('/', async (req,res) => {
    const {title, cards} = req.body

    try{
       const deck = await decks.create({title, cards})
       res.status(200).json(deck)
    }catch (error){
        res.status(400).json({mssg: error.message})
    }
    res.json({mssg: "POST res successful"})
})

export default routes