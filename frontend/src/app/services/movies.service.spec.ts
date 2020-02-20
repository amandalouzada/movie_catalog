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
      title: "Teste Bat Filme",
      genre: "Drama",
      releaseDate: "2017",
      mainActors: "João e Maria",
      youtubeTrailer: "https://youtube.com",
      summarizedPlot: "Era uma vez um teste que deu muito errado"
    }).toPromise();

    console.log(movie);
    expect(movie).toBe(movie);
  });
});
