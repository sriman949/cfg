const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id : {
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
    status : {
        type :String,
        required : true
    },
    working_hours : {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Acheivement' , acheivementSchema);