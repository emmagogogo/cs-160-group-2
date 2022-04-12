const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({

    job: {
        id: {
            type: Schema.Types.ObjectId
        },
        title: {
            type: String
        },
        shortDescription: {
            type: String
        }
    },
    user: {
        type: Schema.Types.ObjectId
    },

    stage: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('jobApplication', JobApplicationSchema);
