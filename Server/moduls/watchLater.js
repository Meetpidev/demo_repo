import mongoose from "mongoose";

const watchLaterVideoSchema = mongoose.Schema({
    videoId: {type:String,require:true},
    Viewer: {type:String,require:true},
    LikedOn:{type:Date,default: Date.now}
})

export default mongoose.model('watchLaterVideo',watchLaterVideoSchema)