import { Schema, model, Document, Model, } from 'mongoose';

interface MovieInterface extends Document {
  title: string;
  genre: string;
  releaseDate: string;
  mainActors: string;
  summarizedPlot: string;
  youtubeTrailer: string;
  createdAt?: Date;
  updatedAt?: Date;

  getReturnJson(): any;
}

export interface MovieModel extends Model<MovieInterface> {
  countMovies(query: any): Promise<number>;
}


const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  mainActors: {
    type: String,
    required: true,
  },
  summarizedPlot: {
    type: String,
    required: true,
  },
  youtubeTrailer: {
    type: String,
    required: true,
  },
}, { timestamps: true, });

MovieSchema.methods.getReturnJson = function () {
  const returnJson = this.toJSON();
  return returnJson;
};

MovieSchema.statics.countMovies = async function (query: any = {}) {
  const count = await this.find(query).select('_id').lean().countDocuments().exec();
  return count;
};



export const Movie: MovieModel = model<MovieInterface, MovieModel>('movie', MovieSchema);
