const express = require("express");
const bp = require('body-parser');
const cors = require("cors");
const db = require("./app/models");
const PORT = process.env.PORT || 8081;
const app = express();
const corsOptions = {
  origin: "*"
};






app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors(corsOptions));
db.sequelize.sync();

require("./app/routes/preach.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});