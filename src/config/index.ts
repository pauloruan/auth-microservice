import cors from 'cors';
import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import databaseConfig from '../database';
import router from '../routes';
import swaggerDocs from '../swagger.json';

export default function appConfig(app: Express): void {
  databaseConfig();

  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
