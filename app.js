'use strict';

// MODULES
var express      = require('express');
var app          = express();
var errorhandler = require('errorhandler');
var morgan       = require('morgan');
var swig         = require('swig');

// CONSTANTES
var PORT  = 3434;
var ENV   = 'development';

// CONFIGURATION
app.engine('html', swig.renderFile);
app.set('port', process.env.PORT || PORT);
app.set('view engine', 'html');
app.set('view cache', false);
app.set('views', __dirname + '/views');
app.set('env', process.env.ENV || ENV);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/assets'));
swig.setDefaults({ 
  cache: false,
  varControls: ['{(', ')}']
});


// ROUTES
require('./routes/index')(app);
app.get('*', function(req, res) { 
  res.status(404).render('pages/404');
});


// SERVER
if (ENV == 'development') {
  app.use(errorhandler());
}
app.listen(app.get('port'), function() {
  console.log('Plouf - Paf ' + app.get('port'));
});
