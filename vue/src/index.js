// Modules
const express = require('express');
const morgan = require('morgan');
const someModule = require('./modules/module');

const app = express();

someModule.test();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', require('./routes/api.js'));

// Static Files
app.use(express.static(__dirname + '/public'));

// Server
app.listen(
  app.get('port'), () =>
  {
    console.log('Server on Port', app.get('port'));
  }
)
