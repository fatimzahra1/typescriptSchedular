import mongoose from "mongoose";


export interface UserDocument extends mongoose.Document {
  id:string;
  secAfterMidnight: number;
  payload: string;
}

const userSchema = new mongoose.Schema({
    id:{ type: String, required: false },
    secAfterMidnight: { type: String, required: true },
    payload: { type: String, required: true },
});

const UserModel = mongoose.model("shedule", userSchema);

export default UserModel;
