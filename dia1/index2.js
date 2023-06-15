let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://albacarranzag:albacarranzag@cluster0.epdcvno.mongodb.net/codenotch',
                { useNewUrlParser: false, useUnifiedTopology: false })

let Photo = require("./photoValidation")

// Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
// const { default: mongoose } = require("mongoose");

// function subirFoto(name, url, title, description) {
//     const data = {
//         name: name,
//         url: url,
//         title: title,
//         description: description,
//     };

//     Photo.create(data)
//         .then(function (resp) {
//             console.log("Foto guardada correctamente");
//             console.log(resp);
//             mongoose.disconnect();
//         })
//         .catch(function (error) {
//             console.log("Error al guardar la foto:", error);
//         });
// }

// subirFoto("usuario3", "https://static.eldiario.es/clip/c9110a1b-bc8d-4ca7-a1da-316c9f4e068e_16-9-aspect-ratio_default_0.jpg", "carlos", "carlitos es")


// • Obtener fotos:
// Dado un usuario obtener todas sus fotos.
// function obtenerFotos(name) {

//     Photo.find({ name: name }, { url: 1, _id: 0 })
//         .then(function (resp) {
//             console.log("Fotos encontradas");
//             console.log(resp);
//             mongoose.disconnect();
//         })
//         .catch(function (error) {
//             console.log("Error al buscar fotos", error);
//         });
// }

// obtenerFotos("Jorge")


// • Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripción.
// function modificarFoto(title, description) {

//     Photo.findOneAndUpdate(({ title: title }, { description: description }))
//         .then((dato) => {
//             console.log("se ha modificado");
//             console.log(dato);
//         })
//         .catch((error => {
//             console.log(error);
//         }))
// }

// modificarFoto("nose", "kkkkkk")


// • Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.
// function eliminarFoto(name, title) {

//     Photo.findOneAndUpdate(({ name: name }, { title: title }), { $unset: { url: "" } })
//         .then((dato) => {
//             console.log("se ha eliminado la foto");
//             console.log(dato);
//         })
//         .catch((error => {
//             console.log(error);
//         }))
// }

// eliminarFoto("Charlie", "nutria")



// • Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.
// function eliminarFotos(name) {

//     Photo.updateMany({ name: name }, { $unset: { url: "" } })
//         .then((dato) => {
//             console.log("se ha eliminado la foto");
//             console.log(dato);
//         })
//         .catch((error => {
//             console.log(error);
//         }))
// }

// eliminarFotos("usuario3")
    