const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');

require('./person.model');

const Person = mongoose.model('persons');
const person = new Person ({
    name: 'Valia',
    age: 42
});

// person.save()
//     .then(user => console.log(user))
//     .catch(error => console.log(error) )

app.use(cors());

mongoose.connect('mongodb+srv://alex:XY31TQGX9CA4FRtt@cluster0-mzhck.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb has started'))
    .catch(() => console.log('connection error'));

app.get('/add', function (req, res) {
    person.save()
     .then(user => res.json(user))
     .catch(error => console.log(error));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


