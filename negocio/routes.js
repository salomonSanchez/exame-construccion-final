var home = require('./controlador');
//you can include all your controllers

module.exports = function (app) {
    //llamdo get
    app.get('/',home.consultaDatos);//home
    app.get('/consultar',home.consultaDatos);//home
    //llamdo post
    app.post('/insertar', home.insertar);
    app.post('/update/:id', home.actualiza);
    //
    app.get('/update/:id', home.editar);
    app.get('/delete/:id', home.borrar);
    
}
