const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

require('./person.model');

const Person = mongoose.model('persons');
const person = new Person ({
    name: 'Roma',
    age: 39
});

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://alex:XY31TQGX9CA4FRtt@cluster0-mzhck.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('mongodb has started'))
    .catch((err) => console.log('connection error' + err));

app.get('/getAll', function (req, res) {
    Person.find()
        .then(users => res.json(users))
        .catch(error => console.log(error));
});


app.get('/add', function (req, res) {
    person.save()
     .then(user => res.json(user))
     .catch(error => console.log(error));
});

app.post('/removeUser', function (req, res) {
    Person.findOneAndRemove(req.body.id, (err, todo) => {
       if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",
        };

        return res.status(200).send(response);
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


