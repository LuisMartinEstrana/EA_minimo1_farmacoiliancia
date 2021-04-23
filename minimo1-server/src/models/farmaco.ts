import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    unidad: String,
    descripcion: String,
    telefono: String
});

export interface IFarmaco extends Document {
    unidad: string,
    description: string,
    telefono: string
}

export default model<IFarmaco>('Farmaco', schema);