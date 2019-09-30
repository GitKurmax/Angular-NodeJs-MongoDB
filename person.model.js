const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: false
    },

    age: {
        type: Number,
        min: 18,
        max: 60,
        default: 20,
        unique: false
    } 
});

mongoose.model('persons', PersonSchema);