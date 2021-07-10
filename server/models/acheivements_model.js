const mongoose = require('mongoose');

const acheivementSchema = mongoose.Schema({
    volunter_id : {
        type :String,
        required : true
    },
    batch : {
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