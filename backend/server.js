require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "all fields are required" });
  }

  console.log("New contact submission:", { name, email, message });

  res.status(200).json({ success: "message received" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
