import * as express from 'express';

import { ProjectController } from '../../controllers';
class ProjectRoute {
    public path = '/api/v1/projects';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        // this.router.get(`${this.path}/:isbn`, this.getByIsbn);
        this.router.get(this.path, this.get);
        // this.router.post(this.path, this.post);
        // this.router.put(this.path, this.put);
        // this.router.delete(this.path, this.delete);
    }

    get = (request: express.Request, response: express.Response) => {
        ProjectController.find((projects:any)=>{
            response.send({
                childCount: projects.length,
                children: projects
            });
        });
    }

}

export default ProjectRoute;