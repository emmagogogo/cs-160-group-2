const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation');

// new conv 
router.post("/", async (req, res)=>{
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });

    try{
        const sevedConversation = await newConversation.save(); 
        res.status(200).json(sevedConversation);
    } catch(err) {
        res.status(500).json(err);
    }
})


// get conv
route.get("/:getId", async (req, res)=>{
    try{
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] }
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

// @route    GET api/conversations/:id
// @desc     Get conversation by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
    try {
      const conversation = await conversation.findById(req.params.id);
  
      if (!job) {
        return conversation.status(404).json({ msg: 'conversation not found' });
      }
  
      res.json(conversation);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


module.exports = router;