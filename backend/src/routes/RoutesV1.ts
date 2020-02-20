import express from 'express';
import { Request, Response } from 'express';


const RoutesV1 = express.Router();

RoutesV1.get(
  '',
  (req: Request, res: Response) => {
    res.json({
      title: 'Catálogo de Filmes'
    })
  }
);

export default RoutesV1;
