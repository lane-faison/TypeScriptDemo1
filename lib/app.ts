import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express"; // Specifically brings in Request and Response types to use in router methods

class App {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public app: express.Application

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello World!'
            })
        });

        router.get('/myName', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello, your name is Lane.'
            })
        });

        router.post('/', (req: Request, res: Response) => {
            const data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });

        this.app.use('/', router)
    }

}

export default new App().app;