const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from Property Maker server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port 8080.`);
});