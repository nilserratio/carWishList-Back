import { type Types } from "mongoose";

export interface CarDatabaseStructure {
  nombre: string;
  img: string;
}

export interface CarDataStructure extends CarDatabaseStructure {
  _id: Types.ObjectId;
}
