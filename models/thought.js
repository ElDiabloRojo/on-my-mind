const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    feeling: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Thought", thoughtSchema, "thoughts")