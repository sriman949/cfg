const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    volunter_id : {
        type :String,
        required : true
    },
    title : {
        type : String,
        required: true
    },
    description : {
        type :String,
        required : true
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
    // image_url : {
    //     type: String,
    //     data: Buffer,
    //     contentType: String
    // }
})


module.exports = mongoose.model('Post' , PostSchema);