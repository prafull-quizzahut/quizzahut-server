# This is API Model File created for developement reference in Backend development according to database queries.
Maintained by: Govind Kulkarni

API Style Guidelines:
    
    1. localhost:{{PORT}}/api/v1/...


Healthcheck Endpoints:
    
    GET
    localhost:{{PORT}}/healthcheck/

    Request:
    {}

    Response: 200 OK
    {
    "status": "Healthy",
    "duration": "00:00:00.0066738",
    "info":
    [
        {
        "key": "ExampleHealthCheckAsync",
        "description": "Health Msg Here.",
        "duration": "00:00:00.0010113",
        "status": "Healthy",
        "data": {}
        }
    ]
    }

User Signup:
    
    POST
    localhost:{{PORT}}/api/v1/user

    Request:
    {
        'username' : 'username',
        'name' : 'Test Name',
        'password' : 'password-hash',
        'contact' : '9876543210',
        'email' : 'user@test.com',
    }

Query:

```
Select 

Insert into 
```

    Response: 200 OK
    {
        "jwt": 
    }


