const User = require('../models/userModel');

const bcrypt = require('bcrypt');

// Create User - signup
exports.createUser = async (req, res) => {
    try {
      const { name, role, email, contact, password, branch, college, university, passout_year, current_year, city } = req.body;

      //Hashing password entered by the user
      const hashPassword = await bcrypt.hash(password, 10);  //10 is saltRounds

      const user = await User.create({ name, role, email, contact, password: hashPassword, branch, college, university, passout_year, current_year, city });
      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  //Login User
  exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
    
      //finding user by email with USer.findOne() method
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Check password match
      //"bcrypt.compare" to compare the provided password with the stored password hash.
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Return user details
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Get All Users
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Get User by ID
  exports.getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Update User
  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, role, email, contact, password, branch, college, university, passout_year, current_year, city } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.name = name;
      user.role = role;
      user.email = email;
      user.contact = contact;
      user.password = password;
      user.branch = branch;
      user.college = college;
      user.university = university;
      user.passout_year = passout_year;
      user.current_year = current_year;
      user.city = city;
  
      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Delete User
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };  