import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

export interface Request extends express.Request {
  session: [any];
}

class Server {
  public app: express.Application;
  public port: string | number;

  constructor(routes: any, port: string | number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.static();

    this.initializeRoutes(routes);
  }

  private static() {
    this.app.use("/", express.static(path.join(__dirname, './../client_build')));
  }

  private initializeMiddlewares() {
    // this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: any) {
    //Login and Auth
    routes.forEach((route: any) => {
      // console.log(route);
      this.app.use('/', route.router);
    });

    // Not found route - goes back to index page
    this.app.use(function (req, res) {
      res.redirect('/');
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default Server;