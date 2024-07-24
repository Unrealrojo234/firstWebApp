const mongoose = require('mongoose');
const InfoSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true , "please enter name"]
        },

        age:{
            type:String,
            required:[true, "please enter age"]
        },
        gender:{
            type:String,
            required:[true, "please enter gender"]
        },

    },
    {
        timestamps:true
    }
);

const Info = mongoose.model("Info",InfoSchema);
module.exports = Info;
