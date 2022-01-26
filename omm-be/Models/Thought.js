const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let thoughtSchema = new Schema({
  content: {
    type: String
  },
  feeling: {
    type: String
  }
}, {
    collection: 'thoughts'
  })

module.exports = mongoose.model('Thought', thoughtSchema)