module.exports = app => {
    const categorias = require("../controllers/CategoriaController.js");
  
    var router = require("express").Router();
  
    
    router.post("/crear-categoria", categorias.createCategoria);
   
   
  
  
    app.use('/api/adonay', router);
  
  };