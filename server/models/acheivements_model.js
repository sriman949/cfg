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
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Acheivement' , acheivementSchema);