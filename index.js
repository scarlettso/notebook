const express = require("express")
const mongoose  = require("mongoose")
const router = require("./router")
const cors = require("cors")

mongoose    
    .connect("mongodb+srv://scarlettso:hongkong1234@cluster0.yt4ou.mongodb.net/notebook-server?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        const app = express()

        app.use(cors());
        app.use(express.json())
        app.use("/api", router)
        app.use(express.static('react-part/build'))

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server has started!")
        })

        
    }
    
    )
