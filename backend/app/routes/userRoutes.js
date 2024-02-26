const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// User routes

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */

/** 
 * @swagger
 *   /api/v1/users:
 *     get:
 *       summary: Get all users
 *       tags: [Users]
 *       responses:
 *         "200":
 *           description: The list of users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
router.get('/users', userController.getAllUsers);

/** 
 * @swagger
 *   /api/v1/users/{id}:
 *     get:
 *       summary: Get user by ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID of the user to retrieve
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         "200":
 *           description: User found
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         "404":
 *           $ref: '#/components/responses/404'
 */
router.get('/users/:id', userController.getUserById);

/** 
 * @swagger
 *   /api/v1/signup:
 *     post:
 *       summary: Create a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         "201":
 *           description: User created successfully
 *         "400":
 *           $ref: '#/components/responses/400'
 */
router.post('/signup', userController.createUser);

/** 
 * @swagger
 *   /api/v1/login:
 *     post:
 *       summary: User login
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                   format: password
 *       responses:
 *         "200":
 *           description: User logged in successfully
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
router.post('/login', userController.loginUser);


/** 
 * @swagger
 *   /api/v1/users/{id}:
 *     put:
 *       summary: Update user
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID of the user to update
 *           required: true
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         "200":
 *           description: User updated
 *         "404":
 *           $ref: '#/components/responses/404'
 */
router.put('/users/:id', userController.updateUser);

/** 
 * @swagger
 *   /api/v1/users/{id}:
 *    delete:
 *       summary: Delete user
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID of the user to delete
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         "204":
 *           description: User deleted
 *         "404":
 *           $ref: '#/components/responses/404'
 */
 router.delete('/users/:id', userController.deleteUser);

module.exports = router;