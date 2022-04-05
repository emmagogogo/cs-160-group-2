const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        member: {
            type: Array,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Message', MessageSchema);
