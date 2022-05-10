const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation');
const auth = require('../../middleware/auth')
const ObjectId = require('mongoose').Types.ObjectId
const { check, validationResult } = require('express-validator');

// new conv 
router.post("/", auth, check("receiverId", "receiverId must not be empty").notEmpty(), async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let userId = req.user.id

  try {

    const conversation = await Conversation.findOne({
      members: { $all: [userId, req.body.recieverId] },
    });


    if (conversation) return res.status(200).json("Conversation already exists, not created!")

    const newConversation = new Conversation({
      members: [ObjectId(userId), ObjectId(req.body.recieverId)]
    });
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
})


// get conv
router.get("/", auth, async (req, res) => {
  try {
    let userId = req.user.id

    const conversation = await Conversation.aggregate([
      {
        '$match': {
          'members': ObjectId(userId)
        }
      }, {
        '$lookup': {
          'from': 'users',
          'localField': 'members',
          'foreignField': '_id',
          'as': 'userInfo'
        }
      }
    ]);
    res.status(200).json(conversation);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

// get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;