const express = require("express")
const db = require("../../data/dbConfig")

const router = express.Router()

router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({message:"error server"})
    })
})

router.post("/", (req, res) => {
    const carsData = req.body;
    db("cars").insert(carsData)
    .then(ids => {
        return db("cars").where({id: ids[0]})
    })
    .then(newcar => {
        res.status(201).json(newcar)
    })
})

module.exports = router;