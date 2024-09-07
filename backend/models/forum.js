const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    posts: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Forum', forumSchema);
