// nmp i router
const express = require('express');
const router = express.Router();
const Job = require("../../models/jobModel");
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');


router.get("/getalljobs", async(req, res) => {
    try{
        const jobs = await Job.find()
        res.send(jobs)
    }catch(error){
        console.error(error.message);
        return res.status(400).json({ error});

    }

});

router.post("/postjob", auth, async(req, res) => {
    try {
        const newJob = new Job(req.body);
        // const user = await User.findById(req.user.id).select('-password');

      newJob.postedBy = req.user.id;
        await newJob.save();
        res.send('Job Posted successfully');
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error});
    }

});

// @route    GET api/jobs/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
  
      if (!job) {
        return res.status(404).json({ msg: 'Job not found' });
      }
  
      res.json(job);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
  
      if (!job) {
        return res.status(404).json({ msg: 'Post not found' });
      }
  
      // Check user
      if (job.postedBy.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await job.remove();
  
      res.json({ msg: 'Post removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

module.exports = router;