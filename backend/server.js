const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
const port = 6100; // Change this to your desired port

// Configure bodyParser to handle JSON data
app.use(bodyParser.json());

// MongoDB database configuration
mongoose.connect("mongodb://localhost:27017/hairrebuild", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
console.log("MongoDb connected Successfully!"));
app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);
// Create a Post schema
const LeadsSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Lead = mongoose.model("Leads", LeadsSchema);

app.post("/contact", async (req, res) => {
  console.log(req.body);
  try {
    const post = await Lead.create(req.body);
    res.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
