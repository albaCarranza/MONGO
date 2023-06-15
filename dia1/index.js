
let mongoose = require("mongoose");

let User = require("./usersValidation")
let Profile = require("./profileValidation")
let Creedentials = require("./creedentialsValidation")
let Photo = require("./photoValidation")

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


// let creedentialsDocument = new Creedentials({
//     address: "calle alta",
//     phone: 88,
//     email: "alta@gmail.es"
// });

// creedentialsDocument.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//     console.log(err)
// })

/////////////////////////////////////////////////

let photosDocument = new Photo({
    name: "Jorge",
    url: "https://static.eldiario.es/clip/c9110a1b-bc8d-4ca7-a1da-316c9f4e068e_16-9-aspect-ratio_default_0.jpg",
    title: "montañas",
    description: "lago entre montañas"
});

photosDocument.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err)
})
