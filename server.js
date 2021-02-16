const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3308"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "Homestore" });
});

require("./app/routes/index")(app);


const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}.`);
});




