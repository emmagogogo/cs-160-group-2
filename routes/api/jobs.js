// nmp i router
const express = require('express');
const router = express.Router();
const Job = require("../../models/jobModel");
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Profile = require('../../models/Profile')
const JobApplication = require('../../models/JobApplication')
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


// @route    GET api/search?searchQuery=:searchQuery
// @desc     Search for a job posting based on the query
// @access   Public
router.get("/search", async(req, res) => {
  try{
    const searchQuery = req.query.searchQuery

    const jobs = await Job.find({'$text': {
      '$search': searchQuery
    }})

    res.send(jobs)
  }catch(error){
    console.error(error.message);
    return res.status(400).json({ error});

}
})

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
        return res.status(404).json({ msg: 'Job not found' });
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

// @route    POST api/jobs/:id/apply
// @desc     Apply to a job, creating a job application in the process
// @access   Private
router.post('/:id/apply', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    const newApplication = new JobApplication({
      job: {
        "id": job.id,
        "title": job.title,
        "shortDescription": job.smallDescription
      },
      user: req.user.id,
      stage: "APPLIED",
      date: Date.now()
    });

    await newApplication.save();

    // if(!profile.hasOwnProperty(applications)) profile.applications = []
    // profile.applications.push(newApplication.id)
    
    job.applications.push(newApplication.id)
    // await profile.save()
    await job.save()


    res.json({ msg: 'Applied successfully!' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    POST api/jobs/editjob/:id
// @desc     edit a posted job
// @access   Private
router.post('/editjob/:id', [auth, checkObjectId('id')], async(req, res) => {
  try {
   
    const job = await Job.findById(req.params.id);
  
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
  
    const updatedJob = await Job.findOneAndUpdate({_id: req.params.id}, req.body);
    res.send('Job updated successfully');
  
  } catch (error) {
    return res.status(400).json({ error});
  }
  
  
 });
 


module.exports = router;