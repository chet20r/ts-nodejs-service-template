import http from 'http';
import express from 'express';
import { applyMiddleware } from './utils';
import middleware from './middleware';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
