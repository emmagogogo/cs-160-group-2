const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

//add
router.post("/", auth, async (req, res)=>{
    const newMessage = new Message(req.body);

    try{
        const sevedMessage = await newMessage.save(); 
        res.status(200).json(sevedMessage);
    } catch(err) {
        res.status(500).json(err);
    }
});

//get
route.get("/", async (req, res)=>{
    try{
        const message = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.send(message)
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err);
    }
});

// @route    GET api/messages/:id
// @desc     Get message by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
    try {
      const message = await message.findById(req.params.id);
  
      if (!job) {
        return message.status(404).json({ msg: 'message not found' });
      }
  
      res.json(job);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


module.exports = router;