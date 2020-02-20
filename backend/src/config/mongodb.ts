import { envMongodb } from './environment';

import mongoose from 'mongoose';

class DbMongo {

  private mongoOptions: mongoose.ConnectionOptions

  public constructor() {
    this.mongoOptions = {
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    //cria indices
    mongoose.set('useCreateIndex', true);

    //conecta com o banco
    mongoose.connect(envMongodb.uri, this.mongoOptions).then(() => {
      console.log('Mongo client connected...');
    }).catch(() => {
      console.error('Mongo client error...');
    });
  }

  public getMongoose() {
    return mongoose;
  }
};

const dbMongo = new DbMongo();
export default dbMongo;
