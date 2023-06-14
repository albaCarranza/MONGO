
let mongoose = require("mongoose");

let User = require("./usersValidation")
let Profile = require("./profileValidation")
let Creedentials = require("./creedentialsValidation")

mongoose.connect('mongodb+srv://albacarranzag:albacarranzag@cluster0.epdcvno.mongodb.net/codenotch',
                { useNewUrlParser: false, useUnifiedTopology: false })

// let userDocument = new User({
//     login: "123456789",
//     password: "123456"
// });

// userDocument.save()
// .then((data) =>
// {
//     console.log(data);
//     // console.log(data.role);
// })
// .catch((err) =>
// {
//     console.log(err)
// })


// let profileDocument = new Profile({
//     name: "Carlos",
//     surname: "guti",
//     dateOfBirth: "1977-01-09",
//     comments: "Carlos está sanito",
//     rol: "admin"
// });

// profileDocument.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//     console.log(err)
// })


let creedentialsDocument = new Creedentials({
    address: "calle alta",
    phone: 88,
    email: "alta@gmail.es"
});

creedentialsDocument.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err)
})
