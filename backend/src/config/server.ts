import { envServer } from './environment';

import './mongodb';

import express, { ErrorRequestHandler, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import { Server } from 'http';

// @ts-ignore
import Youch from 'youch';
import 'express-async-errors';
import ErrorLib from '../lib/ErrorLib';
import userController from '../controllers/UserController';

export default new class ExpressServer {

  private server: express.Express
  private http: Server

  public constructor() {
    this.server = express();
    this.http = new Server(this.server);

    this.middlewares();
  }

  private middlewares() {
    //json
    this.server.use(express.json());

    //cors
    this.server.use(cors());
  }



  private exceptionHandler() {
    this.server.use(async (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
      // Vai processar um erro interno da api
      // @ts-ignore
      const possibleErrorLib: ErrorLib = err;
      if (possibleErrorLib.isErrorLib && possibleErrorLib.isErrorLib()) {
        res.status(possibleErrorLib.getHttpCode() || 422).json(possibleErrorLib.getErrorJson());
        return;
      }

      // vai processar de maneira generica pois foi um erro de execulção
      const errors = await new Youch(err, req).toJSON();


      delete errors.error.frames;

      res.status(500).json(errors);
      return;
    });
  }

  /**
   * Iniciar os servidores http 
   */
  public initServer() {
    
    //handler errors
    this.exceptionHandler();

    //start http
    this.http.listen(envServer.portHttp, () => {
      console.log(`HTTP: start port ${envServer.portHttp}`);
    });

    userController.create();

  }

  /**
   * Fecha os servidor http 
   */
  public closeServer() {
    //close http
    this.http.close();


  }

  public applyRoute(routePath: string, route: express.Router) {
    this.server.use(routePath, route);
  }
};
