module.exports = (sequelize, Sequelize) => {

    const Categoria = sequelize.define("categorias", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Categoria;
  };