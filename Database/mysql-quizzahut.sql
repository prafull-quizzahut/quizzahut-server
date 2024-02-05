CREATE TABLE User (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
 role VARCHAR(20),
  email VARCHAR(255) UNIQUE,
  contact VARCHAR(15),
  password VARCHAR(255),
  branch VARCHAR(50),
  college VARCHAR(50),
  university VARCHAR(50),
  passout_year INT,
  current_year INT,
  city VARCHAR(50)
);

CREATE TABLE Quiz (
  quiz_id INT PRIMARY KEY AUTO_INCREMENT,
  created_by INT,
  created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  subject VARCHAR(50),
  exam VARCHAR(50),
  description TEXT,
  time INT,
  karma INT,
  FOREIGN KEY (created_by) REFERENCES User(user_id)
);

CREATE TABLE Question (
  question_id INT PRIMARY KEY AUTO_INCREMENT,
  text TEXT,
  image_url VARCHAR(255),
  code TEXT,
  options TEXT,
  correct_option VARCHAR(10),
  subject VARCHAR(50),
  karma INT,
  created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
   created_by INT,
  quiz_id INT,
  FOREIGN KEY (created_by) REFERENCES User (user_id),
  FOREIGN KEY (quiz_id) REFERENCES Quiz (quiz_id)
);

CREATE TABLE Subject (
  subject_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  exam VARCHAR(50),
  added_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  added_by INT,
  subject_description TEXT,
  FOREIGN KEY (added_by) REFERENCES User(user_id)
);

CREATE TABLE Exam (
  exam_id INT PRIMARY KEY AUTO_INCREMENT,
  exam_name VARCHAR(50),
  exam_description TEXT,
  added_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  added_by INT,
  exam_form_website VARCHAR(255),
  FOREIGN KEY (added_by) REFERENCES User(user_id)
);

CREATE TABLE Review (
  review_id INT PRIMARY KEY AUTO_INCREMENT,
  quiz_id INT,
  user_id INT,
  karma INT,
  FOREIGN KEY(quiz_id) REFERENCES Quiz(quiz_id),
  FOREIGN KEY(user_id) REFERENCES User(user_id)
);


--insert data into all tables

--User table
INSERT INTO User (name, role, email, contact, password, branch, college, university, passout_year, current_year, city)
VALUES('Govind K', 'Student', 'Govindk@gmail.com', '9876543210', 'govind123', 'Electrical eng', 'VDF College', 'SRTM University', 2023, 2, 'Latur'),
('Yatin C', 'Student', 'yatindevs@gmail.com', '8765432109', 'yatin555', 'Civil Eng', 'Nashik College', 'Pune university', 2022, 4, 'Mumbai'),
('Sunil P', 'Student', 'sunilp@gmail.com', '7654321098', 'sunil222', 'Info Tech', 'DEF College', 'MES university', 2021, 6, 'Sambhajinagar'),
('Tejas P', 'Student', 'tejasp@gmail.com', '9843210987', 'tejasitk@123', 'Mechanical Eng', 'IIT Kg', 'Central university', 2024, 1, 'Pune');

--Quiz table
INSERT INTO Quiz (created_by, subject, exam, description, time, karma)
VALUES
(2, 'DSA', 'CCAT', 'DSA test', 45, 8),
(1, 'Programming in C', 'CCAT', 'Tprogramming in C language test', 40, 6),
(4, 'Operating Systems', 'CCAT', 'Operating Systems test', 35, 7),
(3, 'Computer Fundamentals', 'CCAT', 'computer fundamentals and networking', 40, 6);

--Question table
INSERT INTO Question (text, image_url, code, options, correct_option, subject, karma, created_by, quiz_id)
VALUES
 ('What is the output of the following C code snippet?', NULL, 'int main() { printf("Hello, World!"); return 0; }', 'A. Hello, World! B. Nothing C. Compilation Error D. Runtime Error', 'A', 'C Language', 5, 1, 1),
('Which keyword is used to define a macro in C?', NULL, NULL, 'A. macro B. define C. macrodef D. #define', 'D', 'C Language', 5, 1, 1),
('What is the time complexity of the bubble sort algorithm?', NULL, NULL, 'A. O(n) B. O(log n) C. O(n^2) D. O(n log n)', 'C', 'DSA', 5, 2, 2),
 ('Which data structure is used to implement a LIFO queue?', NULL, NULL, 'A. Queue B. Stack C. Linked List D. Tree', 'B', 'DSA', 5, 2, 2);


--Subject table
INSERT INTO Subject (name, exam, added_by, subject_description)
VALUES
('Programming in C', 'CCAT', 1, 'Test your C programming languages.'),
('DSA', 'CCAT', 2, 'Study of DSA using C++ programming'),
('Computer Fundamentals', 'CCAT', 3, 'CF and networking in depth'),
('Operating Systems', 'CCAT', 4, 'Study of how operating systems work');

--Exam table
INSERT INTO Exam (exam_name, exam_description, added_by, exam_form_website)
VALUES
('CCAT-MOCK 1', 'Mock test for cdac ccat exam', 3, 'http://cdac.in/ccattest'),
('CCAT-MOCK 2', 'Mock test for cdac ccat exam', 2, 'http://cdac.in/ccattest'),
('CCAT-MOCK 3', 'Mock test for cdac ccat exam', 1, 'http://cdac.in/ccattest'),
('CCAT-MOCK 4', 'Mock test for cdac ccat exam', 4, 'http://cdac.in/ccattest');

--Review table
INSERT INTO Review (quiz_id, user_id, karma)
VALUES (1, 1, 4),
(1, 2, 3),
(2, 4, 2),
(2, 3, 1);




