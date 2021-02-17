const express = require ('express');
const exphbs = require ('express-handlebars');
const morgan = require ('morgan');
const path = require ('path');
//inicializar
const app =express();
//configuracion del servidor si existe port sino 3306
app.set('port', process.env.PORT || 3306 );
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs ({
    defaultlayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'pasrtial'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}));
//Middlware usar servidr
app.use(morgan('dev'));
//aceptar datos en string
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Variablesglobales
app.use((req, res, next)=> {
    next();
});

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.js'));
app.use(require('./routes/links.js'));

//Iniciar el servidor
app.listen(app.get('port'), () => {
console.log('Servidor en el puerto', app.get('port'));
});

//publica
app.use(express.static(path.join(__dirname, 'public')));