CREATE TABLE schools (
  school_id INT AUTO_INCREMENT PRIMARY KEY,
  school_name VARCHAR(100),
  school_address VARCHAR(255)
);

CREATE TABLE admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  admin_name VARCHAR(100),
  admin_email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  school_id INT,
  FOREIGN KEY (school_id) REFERENCES schools(school_id)
);
