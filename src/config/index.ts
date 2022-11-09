import express, { Express } from 'express';
import cors from 'cors';
import router from '../routes';
import databaseConfig from '../database';

export default function appConfig(app: Express): void {
  databaseConfig();

  app.use(cors());
  app.use(express.json());
  app.use(router);
}
