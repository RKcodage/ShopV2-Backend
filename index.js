const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => console.log("Server started"));
