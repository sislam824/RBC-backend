const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_id: { type: String, unique: true, required: true },
  student_name: { type: String, required: true },
  student_age: { type: Number, required: true },
  grade: { type: String, required: true },
  school_id: { type: Number, required: true }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
