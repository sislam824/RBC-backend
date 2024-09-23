const fs = require("fs");
const path = require("path");
const { validateStudentData } = require("../middleware/validateStudent");
const studentsFilePath = path.join(__dirname, "../data/students.json");

const getAllStudents = (req, res) => {
  fs.readFile(studentsFilePath, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const students = JSON.parse(data);
    res.json(students);
  });
};

const getStudentById = (req, res) => {
  fs.readFile(studentsFilePath, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const students = JSON.parse(data);
    const student = students.find((student) => student.id === req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  });
};

const createStudent = (req, res) => {
  const newStudent = req.body;
  const validationError = validateStudentData(newStudent);
  if (validationError) return res.status(400).json({ error: validationError });

  fs.readFile(studentsFilePath, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const students = JSON.parse(data);
    students.push(newStudent);
    fs.writeFile(studentsFilePath, JSON.stringify(students, null, 2), (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(newStudent);
    });
  });
};

const updateStudent = (req, res) => {
  const updatedData = req.body;
  const validationError = validateStudentData(updatedData);
  if (validationError) return res.status(400).json({ error: validationError });

  fs.readFile(studentsFilePath, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const students = JSON.parse(data);
    const index = students.findIndex((student) => student.id === req.params.id);
    if (index === -1)
      return res.status(404).json({ error: "Student not found" });

    students[index] = { ...students[index], ...updatedData };
    fs.writeFile(studentsFilePath, JSON.stringify(students, null, 2), (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(students[index]);
    });
  });
};

const deleteStudent = (req, res) => {
  fs.readFile(studentsFilePath, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    let students = JSON.parse(data);
    students = students.filter((student) => student.id !== req.params.id);
    fs.writeFile(studentsFilePath, JSON.stringify(students, null, 2), (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(204).end();
    });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
