import express from 'express'

const routes = express.Router()

routes.get('/', (req,res) => {
    res.json({mssg: "get res successful"})
})

export default routes