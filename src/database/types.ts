import { type Types } from "mongoose";

export interface CarDatabaseStructure {
  id: string;
  nombre: string;
  img: string;
}

export interface CarDataStructure extends CarDatabaseStructure {
  _id: Types.ObjectId;
}
