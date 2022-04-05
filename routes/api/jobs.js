// nmp i router
const express = require('express');
const router = express.Router();
const Job = require("../../models/jobModel");


router.get("/getalljobs", async(req, res) => {
    try{
        const jobs = await Job.find()
        res.send(jobs)
    }catch(error){
        console.error(error.message);
        return res.status(400).json({ error});

    }

});

router.post("/postjob", async(req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.send('Job Posted successfully');
    } catch (error) {
        return res.status(400).json({ error});
    }

});
module.exports = router;