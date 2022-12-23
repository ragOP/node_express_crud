const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.json())
// http://localhost:4000/employees

app.get('/employees', (req, res) => {
    connection.query('SELECT * FROM employee', (err, answer) => {
        if (err) {
            console.log('error in get APi', err);
        }
        else {

            res.send(answer)
            // res.send('Hello World')
        }
    })
})
app.delete('/employees/:id', (req, res) => {
    connection.query('DELETE  FROM employee WHERE id=?', [req.params.id], (err, answer) => {
        if (err) {
            console.log('error in get APi', err);
        }
        else {

            res.send(answer)
            // res.send('Hello World')
        }
    })
})
app.post('/employees', (req, res) => {
    var emp=req.body
    var empData=[emp.name,emp.salary]
    connection.query('INSERT INTO employee(name,salary) values(?)',[empData], (err, answer) => {
        if (err) {
            console.log('error in get APi', err);
        }
        else {

            res.send(answer)
            // res.send('Hello World')
        }
    })
})
app.listen(4000, () => console.log('Express Server is running for 40000'))