const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json())
routerApi(app);

const whitelist = ["http://127.0.0.1:5500"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Acceso No permitido"));
    }
  }
}
app.use(cors(options));

app.get("/api/home", (req, res) => {
  res.send("<h1>Home</h1>");
})

app.listen(port, () => {
  console.log("My port is " + port);
});
