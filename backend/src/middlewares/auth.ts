import { Request, Response, NextFunction, } from 'express';
import { decode, verify, } from 'jsonwebtoken';
import { envTokenUser } from "../config/environment";

import ErrorLib from '../lib/ErrorLib';


export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ErrorLib({
      message: 'não autorizado',
      httpCode: 401
    })

  }

  const tokenDecoded: any = decode(token);


  try {
    verify(token, envTokenUser)
  } catch (e) {
    throw new ErrorLib({
      message: 'não autorizado',
      httpCode: 401
    })
  }

  next();
};
