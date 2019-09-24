const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        min: 18,
        max: 60,
        default: 20
    } 
});

mongoose.model('persons', PersonSchema);