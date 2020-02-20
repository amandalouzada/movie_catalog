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

RoutesV1.get('/movies',
  movieController.list
)

RoutesV1.get('/movies/:id',
  movieController.view
)

export default RoutesV1;
