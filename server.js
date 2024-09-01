import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Atlas connection
mongoose
  .connect("mongodb://localhost:27017/lander", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Database", err);
  });

// Define a schema and model
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

// Handle form submission
app.post("/submit-form", (req, res) => {
  const formData = new Form({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });

  formData
    .save()
    .then(() => {
      res
        .status(200)
        .send(
          `<h1>Your details have been successfully submitted!</h1><p><a href="javascript:history.back()">Click for homepage</a><p>`
        );
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.status(500).send("Error saving data");
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
