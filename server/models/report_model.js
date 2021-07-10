const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    volunter_id : {
        type :String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    score : {
        type: Number,
        required: true
    },
    verified : {
        type :Boolean,
        required : true
    },
    working_hours : {
        type: Number,
        required: true
    },
    submitted_date : {
        type: Date,
        default: Date.now,
    }
})


module.exports = mongoose.model('Report' , reportSchema);