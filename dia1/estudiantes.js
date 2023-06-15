const { group } = require("console");

let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://albacarranzag:albacarranzag@cluster0.epdcvno.mongodb.net/codenotch',
    { useNewUrlParser: false, useUnifiedTopology: false })


const teachersSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    groups: [String]
})

const subjectsSchema = new mongoose.Schema({

    title: String,
    profesores: [teachersSchema]
})

const markSchema = new mongoose.Schema({

    date: Date,
    mark: Number,
    asignaturas: subjectsSchema
})

const studentsSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    notas: [markSchema]
})
                
//creacion de arboles               
let studentsModel = mongoose.model("studentsArbol", studentsSchema)
let markModel = mongoose.model("markArbol", markSchema)
let subjectsModel = mongoose.model("subjectsArbol", subjectsSchema)
let teachersModel = mongoose.model("teachersArbol", teachersSchema)


//teachers
let teachers1 = new teachersModel({ first_name: "Lolo", last_name: "lili", groups: ["frikis", "escultura"] })
let teachers2 = new teachersModel({ first_name: "Charlie", last_name: "juju", groups: ["frikis", "escultura"] })

//subjects
let subjects1 = new subjectsModel({ title: "matematicas", profesores: [teachers1] })
let subjects2 = new subjectsModel({ title: "literatura", profesores: [teachers1, teachers2] })

//marks
let mark1 = new markModel({ date: "1999-01-01", mark: 8, asignaturas: subjects1 })
let mark2 = new markModel({ date: "2023-01-01", mark: 5, asignaturas: subjects2 })

//students
let student1 = new studentsModel({ first_name: "Pablo", last_name: "gutiti", notas: [mark2] })
let student2 = new studentsModel({ first_name: "Julian", last_name: "luis", notas: [mark1] })
let student3 = new studentsModel({ first_name: "Carla", last_name: "raton", notas: [mark2] })
let student4 = new studentsModel({ first_name: "Pepito", last_name: "ordendor", notas: [mark1] })      


//funciones then y catch
// teachers1.save()
//     .then((result) => {
//         console.log("teacher 1 guardado")
//         return teachers2.save()
//     })
//     .then((result) => {
//         console.log("teacher 2 guardado")
//         return subjects1.save()
//     })
//     .then((result) => {
//         console.log("subject 1 guardado")
//         return subjects2.save()
//     })
//     .then((result) => {
//         console.log("subject 2 guardado")
//         return mark1.save()
//     })
//     .then((result) => {
//         console.log("mark 1 guardado")
//         return mark2.save()
//     })
//     .then((result) => {
//         console.log("mark 2 guardado")
//         return student1.save()
//     })
//     .then((result) => {
//         console.log("estudiante 1 guardado")
//         return student2.save()
//     })
//     .then((result) => {
//         console.log("estudiante 2 guardado")
//         return student3.save()
//     })
//     .then((result) => {
//         console.log("estudiante 3 guardado")
//         return student4.save()
//     })
//     .then((result) =>
//         console.log("estudiante 4 guardado"))

//     .catch((error) => {
//         console.log(error)
//     })




// mostrar tods las notas de un alumno
// studentsModel.findOne({first_name : "Carla"}, { notas : 1 })
//     .then(function (item) {
//         console.log(item.notas[0].mark);
//         mongoose.disconnect();
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// // mostrar todas las asignaturas de un alumno
// studentsModel.findOne({ first_name: "Carla" }, { notas: 1 })
//     .then(function (item) {
//         console.log(item.notas[0].asignaturas.title)
//         mongoose.disconnect()
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


// //mostrar todos los profesores de un alumno
studentsModel.findOne({ first_name: "Carla" }, { notas: 1 })
    .then(function (item) {
        console.log(item.notas[0].asignaturas.profesores[0], item.notas[0].asignaturas.profesores[1])
        mongoose.disconnect()
    })
    .catch(function (error) {
        console.log(error)
    })








