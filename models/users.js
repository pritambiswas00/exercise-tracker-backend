const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
       type : String,
       required: true,
       trim : true,
       maxlength: 255,
       minlength: 3
    },
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength : 3
    },
    date : {
        type: Date,
        default: new Date()
    }


},{
    timestamps: true
})

const User = mongoose.model('User', UserSchema);

module.exports = User;