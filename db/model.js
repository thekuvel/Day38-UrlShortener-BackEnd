import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type: "string",
        required : true
    },
    userEmail :{
        type: "string",
        required : true
    },
    userPassword : {
        type: "string",
        required : true
    },
    userType :{
        type : "string",
        required : false,
        default : "user"
    }
});

const propertySchema = new mongoose.Schema({
    propertyOwnerName : {
        type: "string",
        required : true
    },
    propertyType : {
        type: "string",
        required : true
    },
    propertyAddress : {
        type: "string",
        required : true
    },
    propertySold : {
        type: "boolean",
        required : true,
        default : "false"
    },
    propertyPrice : {
        type: "string",
        required : true
    },
    propertySize : {
        type: "string",
        required : true
    },
    propertyDetails : {
        type: "string",
        required : true
    },
    propertyImage : {
        type: "string",
        required : true
    },
})

const shortUrlSchema = new mongoose.Schema({
    emailId : {
        type: "string",
        required : false
    },
    longUrl : {
        type: "string",
        required : true
    },
    shortUrl : {
        type: "string",
        required : true
    },
    hitCount : {
        type: "number",
        required : false,
        default : 0
    },
})

const userModel = new mongoose.model("user", userSchema, "users");
const propertyModel = new mongoose.model("property", propertySchema, "properties");
const shortUrlModel = new mongoose.model("shortUrl", shortUrlSchema, "shortUrls");

export {userModel,propertyModel, shortUrlModel};
