import { Schema, model } from "mongoose";

const carSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Car = model("Car", carSchema, "cars");

export default Car;
