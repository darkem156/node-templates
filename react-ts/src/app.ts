import express from 'express';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from "url";

import Test from './modules/test.js';
import api from './routes/api.js';

Test.testing()
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Static Files
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api', api);

app.get('/test', (req, res) =>
{
  res.send('test')
})

export default app;
