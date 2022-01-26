let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Thought Model
let thoughtSchema = require('../models/Thought')

// CREATE Thought
router.route('/create-thought').post((req, res, next) => {
  thoughtSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Thought
router.route('/').get((req, res) => {
  thoughtSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Thought
router.route('/edit-thought/:id').get((req, res) => {
  thoughtSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Thought
router.route('/update-thought/:id').put((req, res, next) => {
  thoughtSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Thought updated successfully!')
      }
    },
  )
})

// Delete Thought
router.route('/delete-thought/:id').delete((req, res, next) => {
  thoughtSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
