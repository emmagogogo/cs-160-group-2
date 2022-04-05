const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

//add
router.post("/", async (req, res)=>{
    const newMessage = new Message(req.body);

    try{
        const sevedMessage = await newMessage.save(); 
        res.status(200).json(sevedMessage);
    } catch(err) {
        res.status(500).json(err);
    }
});

//get
route.get("/:conversationId", async (req, res)=>{
    try{
        const message = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;