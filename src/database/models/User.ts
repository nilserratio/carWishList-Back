import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 5,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteCars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

const User = model("User", userSchema, "users");

export default User;
