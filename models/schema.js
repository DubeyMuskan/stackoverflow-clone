import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name: {type: String, required: true},
    latitude: {type: String , required: false},
    longitude: {type: String , required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: false},
    about: {type: String },
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)