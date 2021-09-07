import * as express from 'express';
import { Message } from '@moviestory/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api 2!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
