import express from 'express';
import { Request, Response } from 'express';
import movieController from './../controllers/MovieController';
import userController from './../controllers/UserController';


const RoutesV1 = express.Router();

RoutesV1.get(
  '',
  (req: Request, res: Response) => {
    res.json({
      title: 'Catálogo de Filmes'
    })
  }
);


RoutesV1.post('/login',
  userController.login
)

RoutesV1.post('/movies',
  movieController.create
)

RoutesV1.get('/movies',
  movieController.list
)

RoutesV1.get('/movies/:id',
  movieController.view
)

RoutesV1.put('/movies/:id',
  movieController.update
)
export default RoutesV1;
