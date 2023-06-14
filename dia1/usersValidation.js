const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    login: String,

    password: {
        type: String,
        validate: [
            function(password)
            {
                return password.length >= 6;
            },
            'La contraseña debe tener más de 6 caracteres'],
            select: false      
    },
})

//esto de abajito son middlewares//

UserSchema.pre('save', function(next){
    console.log("middleware de entrada");
    if(this.login <= 10){
        console.log("el login no puede ser inferior a 10 caracteres")
        next();
    }
    else
    console.log("el login debe ser superior a 10 caracteres")
})
module.exports = mongoose.model("User", UserSchema)
