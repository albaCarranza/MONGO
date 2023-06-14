const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({

    address: String,
    phone: {
        type: Number,
        min: 0,
        max: 99
    },
    email: String
})

//esto de abajito son middlewares//

CreedentialsSchema.pre('save', function(next){
    console.log("middleware de inicio")
    if(this.address.length >= 10){
        console.log("Direccion superior")
        next();
    }
    else
    console.log("La direccion es muy corta")
})

module.exports = mongoose.model("Creedentials", CreedentialsSchema)