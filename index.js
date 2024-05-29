const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", productRoute);

const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://hoangx1801:Sr0JTeg0EwEYxDkF@backenddb.hhoybbl.mongodb.net/API-CRUD-MEN?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT || 3000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});
