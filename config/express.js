/**
 * Created by sarin on 4/23/16.
 */
var config = require('./config'),
    http = require('http'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    flash = require('connect-flash');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.route.js').home(app);
    require('../app/routes/contactus.server.route.js')(app);
    require('../app/routes/healthcare.server.route.js')(app);
    require('../app/routes/scholarship.server.route.js')(app);
    require('../app/routes/galleries.server.route.js')(app);
    require('../app/routes/signup.server.route.js')(app);
    require('../app/routes/signin.server.route.js')(app);
    require('../app/routes/signout.server.route.js')(app);
     require('../app/routes/donate.server.route.js')(app);




    app.use(express.static('./public'));

    return app;
}