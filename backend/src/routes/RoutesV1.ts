import express from 'express';
import { Request, Response } from 'express';
import movieController from './../controllers/MovieController';


const RoutesV1 = express.Router();

RoutesV1.get(
  '',
  (req: Request, res: Response) => {
    res.json({
      title: 'Catálogo de Filmes'
    })
  }
);

RoutesV1.post('/movies',
  movieController.create
)

export default RoutesV1;
