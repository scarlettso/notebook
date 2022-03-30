const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    content: String,
    taskId: String,
    cretedAt: Date
})

module.exports = mongoose.model("Task", schema)