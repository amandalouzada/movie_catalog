import '../src/app';

import expressServer from '../src/config/server';
import { envServer } from '../src/config/environment';
import dbMongo from '../src/config/mongodb';
import request from 'supertest';

describe('Movie', () => {

  //antes de cada teste deleta o banco de dados
  beforeEach(async () => {
    await dbMongo.getMongoose().connection.dropDatabase();
  });

  //depois de todos os testes deleta o banco de dados e fecha o servidor
  afterAll(async () => {
    await dbMongo.getMongoose().connection.dropDatabase();
    expressServer.closeServer();
  });

  it('O filme deve ser cadastrado', async () => {
    const response = await request(envServer.domainUrl)
      .post('/v1/movies')
      .send({
        title: "Teste_1",
        genre: "Drama",
        releaseDate: "2017",
        mainActors: "João e Maria",
        youtubeTrailer: "https://youtube.com",
        summarizedPlot: "Era uma vez um teste que deu muito errado"
      });

    expect(response.body).toHaveProperty('movie');
  });

  it('O filme não pode ser cadastrado', async () => {
    const response = await request(envServer.domainUrl)
      .post('/v1/movies')
      .send({
        genre: "Drama",
        releaseDate: "2017",
        mainActors: "João e Maria",
        youtubeTrailer: "https://youtube.com",
        summarizedPlot: "Era uma vez um teste que deu muito errado"
      });
    expect(response.status).toBe(422);
  });

});
