const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

require('./person.model');

const Person = mongoose.model('persons');
const person = new Person ({
    name: 'Roma',
    age: 40
});

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://alex:XY31TQGX9CA4FRtt@cluster0-mzhck.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, createIndexes: true})
    .then(() => console.log('mongodb has started'))
    .catch((err) => console.log('connection error' + err));

app.get('/getAll', function (req, res) {
    Person.find()
        .then(users => res.json(users))
        .catch(error => console.log(error));
});


app.get('/add', function (req, res) {
    console.log('add')
    person.save()
     .then(user => {
        console.log(user)
        res.json(user)})
     .catch(error => console.log(error));
});

app.post('/removeUser', function (req, res) {
    Person.findOneAndRemove(req.body.id, (err, todo) => {
       if (err) return res.status(500).send(err);
       return res.status(200).send("Todo successfully deleted");
    });
});


app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});


