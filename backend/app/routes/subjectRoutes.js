const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController");

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: API to manage subjects
 */

/**
 * @swagger
 *   /api/v1/subjects:
 *      get:
 *        summary: Get all Subjects
 *        tags: [Subjects]
 *        responses:
 *           "200":
 *             description: List of all subjects retrieved successfully
 *           "500":
 *             description: Internal Server Error. Failed to retrieve subjects.
 *
 *      post:
 *        summary: Create a Subject
 *        tags: [Subjects]
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subject'
 *        responses:
 *           "201":
 *             description: Subject added successfully
 *           "400":
 *             description: Bad request. Invalid data provided.
 *           "500":
 *             description: Internal Server Error. Failed to create the subject.
 */

/**
 * @swagger
 *   /api/v1/subjects/{id}:
 *      get:
 *        summary: Get a Subject by ID
 *        tags: [Subjects]
 *        parameters:
 *          - in: path
 *            name: id
 *            description: ID of the subject to retrieve
 *            required: true
 *            schema:
 *              type: integer
 *        responses:
 *           "200":
 *             description: Subject retrieved successfully
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Subject'
 *           "404":
 *             description: Subject not found.
 *           "500":
 *             description: Internal Server Error. Failed to retrieve the subject.
 *
 *      put:
 *        summary: Update a Subject
 *        tags: [Subjects]
 *        parameters:
 *          - in: path
 *            name: id
 *            description: ID of the subject to update
 *            required: true
 *            schema:
 *              type: integer
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subject'
 *        responses:
 *           "200":
 *             description: Subject updated successfully
 *           "404":
 *             description: Subject not found.
 *           "500":
 *             description: Internal Server Error. Failed to update the subject.
 *
 *      delete:
 *        summary: Delete a Subject
 *        tags: [Subjects]
 *        parameters:
 *          - in: path
 *            name: id
 *            description: ID of the subject to delete
 *            required: true
 *            schema:
 *              type: integer
 *        responses:
 *           "204":
 *             description: Subject deleted successfully
 *           "404":
 *             description: Subject not found.
 *           "500":
 *             description: Internal Server Error. Failed to delete the subject.
 */

router.post("/subjects", subjectController.createSubject);
router.get("/subjects", subjectController.getAllSubjects);
router.get("/subjects/:id", subjectController.getSubjectById);
//router.put('/subjects/:id', subjectController.updateSubject);
router.delete("/subjects/:id", subjectController.deleteSubject);

module.exports = router;
