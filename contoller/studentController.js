const Student = require('../models/studentModel')

exports.allStudents = (req,res) => {
    Student.find()
    .then((s) => {
        return res.status(200).json(s)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:" error fetching students"})
    })
   
}

exports.singleStudent = (req, res) => {
    res.status(200)
    res.json({
        message: "single student gotten successfully"
    })
}

exports.createStudent = (req, res) => {
   if(!req.body.name) {
        res.status(400).json({message: 'please enter your name'})
   }if(!req.body.email){
    res.status(400).json({message: 'please enter your email'})
   }if(!req.body.phone){
    res.status(400).json({message: 'please enter your phone number'})
   }if(!req.body.password){
    res.status(400).json({message: 'please enter your password'})
   }

   const newStudent = new Student({
    name: res.body.name,
    email: res.body.email,
    phone: res.body.phone,
    password: res.body.password
})
    newStudent.save()
    .then(ns => {
        return res.status(201).json(ns)
        console.log(ns)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'error creating new student'})
    })
}

exports.updateStudent = (req, res) => {
    res.status(200)
    res.json({
        message: "student have been updates sucessfully"
    })
}

exports.deleteSingle = (req, res) => {
    res.status(200)
    res.json({
        message: "student have been deleted successfully"
    })
}