import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UsersSchema);
