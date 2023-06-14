const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({

    name: String,
    surname: String,
    dateOfBirth: {
        type: Date,
        min: "1990-01-01",
        max: "1996-01-01"
    },
    comments: String,
    rol: String
})

//esto de abajito son middlewares//

ProfileSchema.pre('save', function(next)

{
    console.log("Middleware de entrada");
    if (this.dateOfBirth > "1996-01-01")
    {
        console.log("Has introducido una edad mayor que 26")
        next();
    }
    else 
    console.log("Solo mayores de 26 años");
    next();
})



module.exports = mongoose.model("Profile", ProfileSchema)