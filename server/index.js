import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import UserRouter from "./routes/user.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", UserRouter); // http://localhost:5000/users/signup

const MONGODB_URL =
  "mongodb+srv://prataprajput27:OdajdhzSw3Fg9AHV@cluster0.39yzdk3.mongodb.net/tour_db?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
