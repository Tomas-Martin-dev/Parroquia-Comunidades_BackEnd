import mongoose, { Document, Schema } from 'mongoose';

export type InstaciaType = Document & {
  projectName: string;
  clientName: string;
  descrption: string;
}


const InstaciaSchema: Schema = new mongoose.Schema({
  nameParroquia: {
    type: String,
    required: true
  },
  contenidoFull: {
    type: String,
    required: true
  },
  contenidoPre: {
    type: String,
    required: true
  },
  imagenes: {
    type: [String],
    required: true
  },
});

export default mongoose.model<InstaciaType>('Instancias', InstaciaSchema);
