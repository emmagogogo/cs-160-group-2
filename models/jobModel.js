const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType :{
        type: String,
        required: true
    },
    salaryFrom: {
        type: Number,
        required: true
    },
    salaryTo: {
        type: Number,
        reequired: true
    },
    experience : {
        type: String,
        required: true
    },
    smallDescription: {
        type: String,
        required: true
    },
    fullDescription :{
        type: String,
        required: true
    },
    minimumQualification: {
        type: String,
        required: true
    },
    skillRequired : {
        type: String,
        required: true
    },
    company : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    },
    appliedCndidates : {
        type : [],
        required: true
    },
    postedBy : {
        type: String,
        required: true
    },
   },
    {
        timestamps: true,
    });
const jobModel = new mongoose.model('job', jobSchema);
module.exports = jobModel;