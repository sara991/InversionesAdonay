const db = require("../models");
const Categoria = db.categorias;
const Op = db.Sequelize.Op;


exports.createCategoria = (req, res) => {
 
  if (!req.body.nombre) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const categoria = {
    nombre: req.body.nombre,
  
  };


  Categoria.create(categoria)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};





