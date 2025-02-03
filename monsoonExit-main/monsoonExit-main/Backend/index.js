const express = require("express");
const cors = require("cors");
require("./connection.js"); 
const BlogModel = require("./model.js");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.status(201).json({ message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
