module.exports = {
    host: "localhost",
    user: "root",
    password: "root1998",
    db: "inversionesadonay",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    
  };