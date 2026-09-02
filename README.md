## Introduction
This project has been created purpose to facilitate new creations and maintenances of projects. In this case, this repository will be updated during all life of project. 

I separate this repository only in backend files, including config, controller, models, routes, server and service files. 

Check and follow after the commented features.

## Main core

### Key Core REST Principles
Understanding these principles is crucial for designing effective RESTful API. They ensure your API is scalable, maintainable, and easy to use.

For a clean code construction, we need to bring good practice and deliver stability and confidence.

Key principles in practice:
- Resource-Based: Focus on resources rather than actions

<!-- Todo -->
``` 
POST /criarUsuario
GET /buscarUsuarios
DELETE /deletarUsuario
 ```
- Stateless: Each request in independent and self-contained
- Cacheable: Responses define their cacheability
- Uniform Interface: Consistent resource identification and manipulation
- Layered System: Client doesn't need to know about the underlying architecture

### Architecture Core REST Principles
A core REST Architecture is really important because it will tell us if your algorithm is functional and legitm.

The core principles include:

1. Client-Server Architecture: Separation of concerns between the client and the server
2. Statelessness: No client context is stored on the server between requests
3. Cacheability: Responses must define themselves as cacheable or non-cacheable
4. Layered System: A client cannot tell whether it is connected directly to the end server
5. Uniform Interface: Resources are identified in requests, resources are manipulated through representations, self-descriptive messages, and HATEOAS (Hypertest As The Engine Of Application State)

### HTTP Methods
We have two options that should be used appropriately: Idempotency and Safety.

Each method has specific semantics to perform their operations and resources.

- Safe Methods: GET, HEAD, OPTIONS (should not modify resources)
- Idempotent Methods: GET, PUT, DELETE (multiple identical requests = same effect as one)
- Non-Idempotent: POST, PATCH (may have different effects with multiple calls)

Look after this table:
<table border="1">
<tr>
<th>Method
<th>Action
<th>Example
</tr>
<tr>
<th>GET
<th>Retrieve resource(s)
<th>GET /api/users
</tr>
<tr>
<th>POST
<th>Create a new resource
<th>POST /api/users
</tr>
<tr>
<th>PUT
<th>Update a resource completely
<th>PUT /api/users/123
</tr>
<tr>
<th>PATCH
<th>Update a resource partially
<th> PATCH /api/users/123
</tr>
<tr>
<th>DELETE
<th>Delete a resource
<th>DELETE /api/users/123
</tr>
</table>