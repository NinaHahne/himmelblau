const express = require("express");
// const cowsay = require("cowsay");
// const cors = require("cors");
const path = require("path");

// Create the server
const app = express();

const { getHours } = require('./db');

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

app.get("/hours", (req, res) => {
  console.log("*************** /hours ***********");
  getHours()
    .then(rows => {
      // check if rows[0].length != 0;
      // res.status(200).send(rows);
      res.json({
        hours: rows
      });
    })
    .catch(err => {
      console.log("err in GET /hours: ", err);
      // res.status(500).send(err);
      res.json({
        success: false
      });
    });
});

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname + "/client/build/index.html"));
  // res.send("Blumenladen himmelblau");
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
