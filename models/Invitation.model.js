const mongoose = require('mongoose');

const InvitationSchema = new mongoose.Schema({
    enterprise: {
        type: mongoose.ObjectId,
        required: true
    },
    employeeEmail: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Invitation', InvitationSchema);