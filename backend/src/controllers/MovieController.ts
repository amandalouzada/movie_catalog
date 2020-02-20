import ErrorLib from "./../lib/ErrorLib";
import { Movie } from "./../models/movie";
import { Request, Response } from 'express';
import * as Yup from 'yup';



class MovieController {

  public create = async (req: Request, res: Response) => {
    const yupSchema = Yup.object().shape({
      title: Yup.string().required(),
      genre: Yup.string().required(),
      releaseDate: Yup.string().required(),
      mainActors: Yup.string().required(),
      summarizedPlot: Yup.string().required(),
      youtubeTrailer: Yup.string().required(),
    });


    if (!await yupSchema.isValid(req.body)) {
      throw new ErrorLib({
        message: 'Dado não enviado',
      });
    }
    const {
      title,
      genre,
      releaseDate,
      mainActors,
      summarizedPlot,
      youtubeTrailer,
    } = req.body;

    const movie = new Movie({
      title,
      genre,
      releaseDate,
      mainActors,
      summarizedPlot,
      youtubeTrailer,
    })

    await movie.save()

    res.json({
      movie: movie.getReturnJson(),
    })
  }


}

const movieController = new MovieController();
export default movieController;