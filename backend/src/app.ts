// seta as variaveis de ambiente
import './bootstrap';

// configuração do server express
import expressServer from './config/server';

// rotas v1
import RoutesV1 from './routes/RoutesV1';

//aplica as rotas ao servidor no path /v1
expressServer.applyRoute('/v1', RoutesV1);

// inicia o servidor
expressServer.initServer();
