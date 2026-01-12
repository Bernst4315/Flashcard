import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
    front: {
        type: String,
        required: true
    },
    back: {
    type: String,
    required: true
    }
})

const deckSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cards: [cardSchema]
    

})

export default mongoose.model('deck', deckSchema)