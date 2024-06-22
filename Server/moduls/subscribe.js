import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    videoChanel: {
      type: String,
      required: true
    }
  }, { timestamps: true });
  
  export default mongoose.model('Subscription', subscriptionSchema);