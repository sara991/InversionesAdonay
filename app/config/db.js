module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root1998",
    DB: "inversionesadona",
    dialect: "mysql",
    port: "3306",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      socketPath: "/var/run/mysqld/mysqld.sock"
  },
  define: {
      paranoid: true
  }
    
  };