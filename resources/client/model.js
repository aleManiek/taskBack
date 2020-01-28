const mongoose = require('mongoose');

const Client = mongoose.model('client', 
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        sex:{
            type: Boolean,
            required: true 
        },
        avatar:{
            type: String,
            required: true
        },  
        address:{
            city:{
                type: String,
                required: true
            },
            street:{
                type: String,
                required: true
            },
            houseNumber:{
                type: String,
                required: true
            }
        }
    });      

module.exports = Client;