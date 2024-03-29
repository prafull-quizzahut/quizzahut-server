-- Created tables as per E-R Diagram
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

CREATE TABLE Question (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    text TEXT,
    image_url VARCHAR(255),
    code TEXT,
    options TEXT,
    correct_option VARCHAR(10),
    subject VARCHAR(50),
    karma INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES User(user_id)
);

CREATE TABLE Subject (
    subject_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    exam VARCHAR(50),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    added_by INT,
    subject_description TEXT,
    FOREIGN KEY (added_by) REFERENCES User(user_id)
);

CREATE TABLE Exam (
    exam_id INT PRIMARY KEY AUTO_INCREMENT,
    exam_name VARCHAR(50),
    exam_description TEXT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    added_by INT,
    exam_form_website VARCHAR(255),
    FOREIGN KEY (added_by) REFERENCES User(user_id)
);



CREATE TABLE QuizDetails (
    quiz_id INT PRIMARY KEY AUTO_INCREMENT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    subject VARCHAR(50),
    exam VARCHAR(50),
    description TEXT,
    time INT,
    karma INT,
    attempted_by INT,
    FOREIGN KEY (created_by) REFERENCES User(user_id)
);
CREATE TABLE Quizzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quiz_id INT,
    question_id INT,
    FOREIGN KEY (quiz_id) REFERENCES QuizDetails(quiz_id),
    FOREIGN KEY (question_id) REFERENCES Question(question_id)
);

CREATE TABLE Review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    quiz_id INT,
    user_id INT,
    karma INT,
    FOREIGN KEY (quiz_id) REFERENCES QuizDetails(quiz_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

--Dummy data insertion into tables

-- Dummy data for User table
INSERT INTO User (name, role, email, contact, password, branch, college, university, passout_year, current_year, city)
VALUES
('Govind Kulkarni', 'Student', 'Govindkul@gmail.com', '9876543210', 'govind123', 'Electrical engineering', 'VDF College', 'SRTM University', 2023, 2, 'Latur'),
('Yatin Chaudhari', 'Student', 'yatindevs@gmail.com', '8765432109', 'yatin555', 'Civil Engineering', 'Nashik College', 'Nashik University', 2022, 4, 'Mumbai'),
('Sunil Pandhare', 'Student', 'sunilp@gmail.com', '7654321098', 'sunil222', 'Information Technology', 'DEF College', 'MES University', 2022, 6, 'Sambhajinagar'),
('Tejas Pawar', 'Student', 'tejaspawar@gmail.com', '9843210987', 'tejiitk@123', 'Mechanical Engineering', 'GHI College', 'PQR University', 2024, 1, 'Pune');
('Adarsh R', 'Student', 'Adarshr01@gmail.com', '7943214657', 'adarshrk@123', 'Computer Engineering', 'GHI College', 'PQR University', 2023, 2, 'chennai');

-- Dummy data for Question table (Java subject)
INSERT INTO Question (text, image_url, code, options, correct_option, subject, karma, created_by)
VALUES
('What does JVM stand for?', NULL, NULL, 'A. Java Virtual Machine\nB. Java Visual Machine\nC. Java Virtual Memory\nD. Java Visual Memory', 'A', 'Core Java', 5, 3),
('Which of the following is not a primitive data type in Java?', NULL, NULL, 'A. int\nB. float\nC. char\nD. string', 'D', 'Java', 6, 3),
('What is the purpose of the 'finally' block in a try-catch-finally statement?', NULL, NULL, 'A. It is executed if an exception is thrown\nB. It is executed regardless of whether an exception is thrown or not\nC. It is used to catch exceptions\nD. It is used to define custom exceptions', 'B', 'Java', 7, 3),
('What is the use of 'super' keyword in Java?', NULL, NULL, 'A. To call the superclass constructor\nB. To access the superclass method or field\nC. To invoke the superclass object\nD. To create an object of the superclass', 'B', 'Java', 8, 3);

-- Dummy data for Subject table
INSERT INTO Subject (name, exam, added_by, subject_description)
VALUES
('Core Java', 'CCEE Test', 3, 'Test your java fundamentals knowledge'),
('DSA', 'CCAT', 2, 'Study of Data structure and algorithms using Java'),
('Programming in C', 'CCAT', 1, 'Test your programming skills and C programming languages.'),
('Operating Systems', 'CCAT', 4, 'Study of how operating systems work'),
('Computer Fundamentals', 'CCAT', 5, 'Study of computer fundamentals and networking in depth');

-- Dummy data for Exam table
INSERT INTO Exam (exam_name, exam_description, added_by, exam_form_website)
VALUES
('CCEE Test', 'Test your Core Java fundamentals knowledge', 3, 'http://examportal.com/cceetest'),
('CCAT', 'Test on Data Structures and Algorithms using Java', 2, 'http://examportal.com/ccatdsa'),
('CCAT', 'Test your programming skills in C', 1, 'http://examportal.com/ccatcprogramming'),
('CCAT', 'Study of how operating systems work', 4, 'http://examportal.com/ccatos'),
('CCAT', 'Test your knowledge of computer fundamentals and networking', 5, 'http://examportal.com/ccatcf');


-- Dummy data for QuizDetails table
INSERT INTO QuizDetails (created_by, subject, exam, description, time, karma, attempted_by)
VALUES
(3, 'Core Java', 'CCEE Test', 'Practice quiz for Core Java fundamentals', 30, 5, 4),
(2, 'DSA', 'CCAT', 'Prepare for the Data Structures and Algorithms test', 45, 8, 1),
(1, 'Programming in C', 'CCAT', 'Test your programming skills in C language', 40, 6, 3),
(4, 'Operating Systems', 'CCAT', 'Review quiz for understanding Operating Systems', 35, 7, 3),
(5, 'Computer Fundamentals', 'CCAT', 'Test your knowledge of computer fundamentals and networking', 40, 6, 2);

-- Dummy data for Quizzes table
INSERT INTO Quizzes (quiz_id, question_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 4);

-- Dummy data for Review table
INSERT INTO Review (quiz_id, user_id, karma)
VALUES
(1, 4, 3),
(2, 1, 5),
(3, 2, 4),
(3, 3, 5);


--CRUD Operations

--Create(Insert)

-- Inserting a new user
INSERT INTO User (name, role, email, contact, password, branch, college, university, passout_year, current_year, city)
VALUES ('Prafull', 'Admin', 'prafullq@example.com', '1234567890', 'password123', 'Computer Science', NULL,NULL,NULL, NULL, 'Nashik');

-- Inserting a new question for Core Java
INSERT INTO Question (text, options, correct_option, subject, karma, created_by)
VALUES ('What is the purpose of the 'finally' block in Java?', 'A. ...', 'B', 'Core Java', 7, 3);

-- Inserting a new subject
INSERT INTO Subject (name, exam, added_by, subject_description)
VALUES ('Database MAnagement', 'CCEE Test', 4, 'Fundamentals of RDBMS');

-- Inserting a new exam
-- Inserting a new exam for Database MAnagement
INSERT INTO Exam (exam_name, exam_description, added_by, exam_form_website)
VALUES ('CCEE Test', 'Test your dbms knowledge', 4, 'http://examportal.com/pythonexam2024');

-- Inserting a new quiz for database MAnagement
INSERT INTO QuizDetails (created_by, subject, exam, description, time, karma, attempted_by)
VALUES (4, 'Database MAnagement', 'CCEE test', 'Practice quiz for database Exam', 40, 6, 1);

-- Inserting a new review for database Exam
INSERT INTO Review (quiz_id, user_id, karma)
VALUES (6, 1, 4);

-- Read (Select) operations

-- Selecting all users
SELECT * FROM User;

-- Selecting questions related to Core Java
SELECT * FROM Question WHERE subject = 'Core Java';

-- Selecting all subjects
SELECT * FROM Subject;

-- Selecting all exams
SELECT * FROM Exam;

-- Selecting quizzes related to Database management
SELECT * FROM QuizDetails WHERE subject = 'Database Management';

-- Selecting all reviews
SELECT * FROM Review;

--Update operations

-- Updating a question's text
UPDATE Question SET text = 'What does JVM stand for in Java?' WHERE question_id = 1;

-- Updating an exam's description
UPDATE Exam SET exam_description = 'Test your database skills' WHERE exam_id = 3;

--Delete operations

-- Deleting a user
DELETE FROM User WHERE user_id = 1;

-- Deleting a question
DELETE FROM Question WHERE question_id = 2;

--we can add as many as per requirement









