import mongoose from "mongoose";

const dataschema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        }
    },

    { 
        timestamps:true 
    }
);

const data = mongoose.model("Data",dataschema);

export default data;
