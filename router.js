const express = require ("express")
const { status } = require("express/lib/response")
const Task = require("./models/task")
const router = express.Router()

router.post("/tasks", async(req, res) =>{
    
    
    try {
        const tasks = new Task({
        title: req.body.title,
        content: req.body.tite,
        taskId: req.body.taskId,
        createdAt: req.body.createdAt
    })
    await tasks.save();
    
    res.send(tasks);
        
    } catch (error) {
        res.status(400).send({msg: error})
    }
    
})

router.get("/tasks", async(req, res) =>{
    try {
        const tasks = await Task.find()
        res.send(tasks)

    } catch (error) {
        res.status(400).send({msg: error})
    }
})

module.exports = router