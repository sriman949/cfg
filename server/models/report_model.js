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
    program_name: {
        type: String,
        required: true
    },
    score : {
        type: Number,
    },
    verified : {
        type :Boolean,
        required : true,
        default : 0
    },
    working_hours : {
        type: Number,
        required: true
    },
    participation_date: {
        type: String,
        required: true
    },
    submitted_date : {
        type: Date,
        default: Date.now,
    },
    url: {
        type: String
    }
})
// reportSchema.path('url').validate((val) => {
//     urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//     return urlRegex.test(val);
// }, 'Invalid URL.');

module.exports = mongoose.model('Report' , reportSchema);