import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files like JS and CSS

// MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://lander:JDVGGZtZYinZUnfk@cluster0.kgakyx9.mongodb.net/lander?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
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
      res.status(200).send(); // Send empty response for successful submission
    })
    .catch((err) => {
      res.status(500).send("Error saving data");
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
