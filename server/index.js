// require('../client/header-sidebar-service/server/index.js');
// require('../client/instructors-service/server/index.js');
// require('../client/Student-Feedback/server/index.js');
// require('../client/students-also-bought-service/server/server.js');
const nr = require('newrelic');
const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');


const PORT = 3005;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));

app.get('/courses/:courseId/header', proxy('http://ec2-34-201-82-146.compute-1.amazonaws.com:3003/'));
app.get('/courses/:courseId/similarcourses', proxy('http://ec2-52-53-187-75.us-west-1.compute.amazonaws.com:3008/'));
app.get('/:Id/instructors', proxy('http://54.183.145.251/'));
app.get('/:courseId/reviews', proxy('http://ec2-35-153-179-188.compute-1.amazonaws.com:3002/'));
