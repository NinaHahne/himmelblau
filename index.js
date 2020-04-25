const express = require("express");
// const cowsay = require("cowsay");
// const cors = require("cors");
const path = require("path");

// Create the server
const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

app.get("/open", (req, res) => {
  console.log("*************** /open ***********");
  getOpeningHours()
    .then(rows => {
      // check if rows[0].length != 0;
      res.json({
        success: true,
        userId: rows[0].id,
        first: rows[0].first,
        last: rows[0].last,
        imageUrl: rows[0].img_url || "/images/duck-308733.png",
        bio: rows[0].bio || ""
      });
    })
    .catch(err => {
      console.log("err in GET /open: ", err);
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
