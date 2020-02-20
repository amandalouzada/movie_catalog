import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cadastra novo filme', async () => {

    const { movie } = await service.newMovie({
      title: (Math.floor(Math.random() * (10000 - 1)) + 1).toString(),
      genre: "Drama",
      releaseDate: "2017",
      mainActors: "João e Maria",
      youtubeTrailer: "https://www.youtube.com/watch?v=oqMHifOQhnY",
      summarizedPlot: "Era uma vez um teste que deu muito errado"
    }).toPromise();

    expect(movie).toBeTruthy()
  });


  it('listando filmes', async () => {

    const response = await service.listMovies().toPromise();

    expect(response.list).toBeTruthy()
  });
});
