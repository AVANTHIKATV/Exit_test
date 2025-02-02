const express = require("express");
require("./connection")
const BlogModel=require("./model")
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
      await BlogModel(req.body).save()
      res.send({message:"Blog added"})
  } catch (error) {
      console.log(error)
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
