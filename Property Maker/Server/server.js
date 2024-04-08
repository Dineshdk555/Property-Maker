const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

// mongoose.connect("mongodb+srv://dk18026:02DdKRrpitgTeACx@cluster0.xmfy7ue.mongodb.net/", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });

// Connect to MongoDB
mongoose.connect('mongodb+srv://dk18026:02DdKRrpitgTeACx@cluster0.xmfy7ue.mongodb.net/', {
  useNewUrlParser: true,  
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from Property Maker server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port 8080.`);
});