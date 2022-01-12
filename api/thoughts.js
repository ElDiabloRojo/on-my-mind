const express = require('express');
const router = express.Router()

const Thought = require('../models/Thought');

router.get('/', (req, res) => {
    Thought.find()
        .then(thoughts => res.json(thoughts))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { content, feeling } = req.content;
    const newThought = new Thought({
        content: content, feeling: feeling
    })
    newThought.save()
        .then(() => res.json({
            message: "Thought successfully posted"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating thought"
        }))
})
module.exports = router 