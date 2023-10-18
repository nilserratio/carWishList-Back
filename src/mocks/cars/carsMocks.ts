import { Types } from "mongoose";
import { type CarDataStructure } from "../../database/types";

export const carsMock: CarDataStructure[] = [
  {
    _id: new Types.ObjectId("64710077b5f9829cfe43b6d9"),
    nombre: "RS3",
    img: "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Audi_A3_2020.jpg?itok=MkiCOhpe",
  },
  {
    _id: new Types.ObjectId("64710077b5f9829cfe43b6d8"),
    nombre: "Q7",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg/1920px-2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
];
