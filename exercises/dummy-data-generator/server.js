import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/Employee.js";
import {
  generateName,
  generateSalary,
  generateLanguage,
  generateCity,
  generateIsManager,
} from "./utils/data_generator.js";

await mongoose.connect("mongodb://localhost:27017/company");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/generate-employees", async (req, res) => {
  await Employee.deleteMany({});
  for (let i = 1; i <= 10; i++) {
    const employee = new Employee({
      name: generateName(),
      salary: generateSalary(),
      language: generateLanguage(),
      city: generateCity(),
      isManager: generateIsManager(),
    });
    await employee.save();
  }
  console.log("✅ GET / called - 10 employees inserted");
  res.send("✅ 10 dummy employee records created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
