const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./person.model');

const Person = mongoose.model('persons');
const person = new Person ({
    name: 'Alex',
    age: 48
});

// person.save()
//     .then(user => console.log(user))
//     .catch(error => console.log(error) )

mongoose.connect('mongodb://localhost/alex-mongodb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb has started'))
    .catch(() => console.log('connection error'));

app.get('/add', function (req, res) {
    person.save()
     .then(user => console.log(user))
     .catch(error => console.log(error));

    res.send('Person added');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


