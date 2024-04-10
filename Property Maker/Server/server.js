const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8080;

// mongoose.connect("mongodb+srv://dk18026:02DdKRrpitgTeACx@cluster0.xmfy7ue.mongodb.net/", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/PropertyMaker', {
  useNewUrlParser: true,  
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
//Body parser
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 500000,
  })
);
app.use(cookieParser());

app.use("/api/user", require("./routers/userRouter"));
app.get("/message", (req, res) => {
  res.json({ message: "Hello from Property Maker server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port 8080.`);
});