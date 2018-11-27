// require('../client/header-sidebar-service/server/index.js');
// require('../client/instructors-service/server/index.js');
// require('../client/Student-Feedback/server/index.js');
// require('../client/students-also-bought-service/server/server.js');

const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const nr = require('newrelic');

const PORT = 3005;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));

app.get('/courses/:courseId/header', proxy('http://localhost:3003/'));
//app.get('/courses/:courseId/similarcourses', proxy('http://localhost:3004/'));
//app.get('/:Id/instructors', proxy('http://localhost:3002/'));
//app.get('/:courseId/reviews', proxy('http://localhost:3001/'));
