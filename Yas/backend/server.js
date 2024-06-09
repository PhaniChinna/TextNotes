const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use("/", (request, response, next) => {
  response.send([
    {
      Name: "Pai",
      Age: 23,
      Location: "NDL",
    },
    {
      Name: "Ravi",
      Age: 34,
      Location: "Knl",
    },
  ]);
});

http.createServer(app).listen(PORT, () => {
  console.log(`server Start http://localhost:${PORT}`);
});
