the file contains Question number one SRPRJ-30 file says  the Online Course Enrollment System

Problem Statement: Create an online course enrollment platform. Focus on:

Course Catalog Page: Display a list of available courses.

Enrollment Page: Allow users to enroll in courses.

Instructions: Use MongoDB for storing course and enrollment data. Validate form inputs.
i have included my html,css and javascript file with them and additionly I am adding my connectivity of SQL hwere for the reference this can be added in javascript file so you fetch 
from back end frameworks like ASP.mvc,php,
Server-side Implementation
Choose a Server-side Technology: Since you can't directly connect to a database from the client-side (browser), you'll need to set up a server-side application to handle the database interactions.
Some popular options include:
Node.js with Express.js framework
ASP.NET Core with C#
PHP with a framework like Laravel or Symfony
Set up the Server-side Application: Depending on the technology you choose, set up a new server-side project and install the necessary dependencies to interact with the SQL Server database. For example, in Node.js 
you'd use the mssql package, in ASP.NET Core you'd use the System.Data.SqlClient namespace, and in PHP you'd use a library like PDO or mysqli.
Implement Database Connectivity: In your server-side application, write code to connect to the SQL Server database, execute queries, and retrieve/manipulate the data. This will typically involve:
Configuring the database connection details (server, database, username, password)
Creating database queries (SELECT, INSERT, UPDATE, DELETE) and executing them
Handling the query results and returning them to the client
Expose an API: Create an API (Application Programming Interface) in your server-side application that your client-side (HTML/CSS/JS) code can interact with. This API should expose endpoints that
allow the client to perform CRUD (Create, Read, Update, Delete) operations on the database.
Client-side Implementation
Consume the API: In your HTML, CSS, and JavaScript code, make HTTP requests to the API endpoints you exposed in the server-side application. You can use JavaScript's built-in fetch() API or a 
library like Axios to make these requests.
Handle the API Responses: When the API responds with data, use JavaScript to manipulate the DOM and display the data on your web page. This could involve creating dynamic HTML elements, 
updating existing elements, or rendering the data in a more complex UI component.
Implement CRUD Operations: Extend your client-side code to handle user interactions (e.g., form submissions) and translate them into API calls to perform CRUD operations on the database.
Here's a high-level example of how you might implement this using Node.js and Express.js

server side javascript code
const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

// Database connection details
const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server_name',
  database: 'your_database_name'
};

// API endpoint to retrieve data
app.get('/api/data', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM your_table`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

Client-side (HTML/CSS/JavaScript):
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>My Project</h1>
  <div id="data-container"></div>

  <script>
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('data-container');
        data.forEach(item => {
          const element = document.createElement('div');
          element.textContent = JSON.stringify(item);
          container.appendChild(element);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  </script>
</body>
</html>

This is a simplified example, but it should give you an idea of how to connect your client-side code to a SQL Server database using a server-side application. 
You'll need to expand on this to handle more complex use cases, such as user authentication, form submissions, and error handling.
