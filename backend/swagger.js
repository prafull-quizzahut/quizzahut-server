const dotenv = require('dotenv');
//swagger options contains api definition and a ref to api routes
//stored in the routes directory
const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Quizzahut REST API',
            version: '1.0.0',
            description:
            "This is simple CRUD api application made with Express and documented with Swagger",

        },
        servers: [ 
        {
            url: `http://localhost:${process.env.NODE_LOCAL_PORT}`,
            description: 'dev server',
        },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['user_id', 'name', 'email', 'password', 'contact'],
                    properties: {
                        user_id: {
                            type: 'integer',
                            format: 'integer',
                        },
                        name: {
                            type:'string',
                        },
                        email: {
                            type:'string',
                            format: 'email',
                        },
                        password: {
                            type:'string',
                            format: 'password'
                        },
                        role: {
                            type: 'string',
                        },
                        contact: {
                            type: 'string',
                        },
                        branch: {
                            type: 'string',
                        },
                        college: {
                            type: 'string'
                        },
                        university: {
                            type: 'string',
                        },
                        passout_year: {
                            type: 'integer',
                        },
                        current_year: {
                            type: 'integer',
                        },
                        city: {
                            type: 'string',
                        },
                    },
                },
                Subject: {
                    type: 'object',
                    required: ['subject_id', 'name', 'description'],
                    properties: {
                        subject_id: {
                            type: 'integer',
                            format: 'integer'
                        },
                        name: {
                            type: 'string'
                        },
                        added_at: {
                            type: 'string',
                            format: 'date-time'
                        },
                        added_by: {
                            type: 'integer',
                            format: 'integer',
                            description: 'Foreign key ref to user_id',
                        },
                        subject_description: {
                            type: 'text',
                        }

                    },
                }
            },
            responses: {
                400: {
                    description: 'Bad Request'
                },
                401: {
                    description: 'Unauthorized'
                },

            },
        },
        
       
    },
    apis: ['./app/routes/*.js'],
};

module.exports = options;