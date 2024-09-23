const validateStudent = (data) => {
  const { student_id, student_name, student_age, grade, school_id } = data;

  if (!student_id || !student_name || !student_age || !grade || !school_id) {
    return "Missing required fields";
  }

  if (isNaN(student_age) || student_age < 1 || student_age > 100) {
    return "Invalid age";
  }

  return null;
};

module.exports = validateStudent;
