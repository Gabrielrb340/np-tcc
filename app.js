var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const port = 3001
const { sequelize } = require('./models/index');

var usertesteRouter = require('./routes/usuarioteste-route');
var userRouter = require('./routes/usuario-route');

var usersRouter = require('./routes/usuarioteste-route');
var cronogramaRouter = require('./routes/cronogramaRoutes');
var entregaRouter = require('./routes/entrega-route');

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log('Example app listening at http://localhost:' + port)
    })
})
app.use('/usuarioTeste', usertesteRouter);
app.use('/usuario', userRouter);
app.use('/entrega',entregaRouter);
app.use('/usuarioTeste', usersRouter);
app.use('/cronograma', cronogramaRouter);


module.exports = app;