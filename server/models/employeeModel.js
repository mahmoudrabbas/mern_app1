const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/company').then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)    
})

const employee = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    salary:{type:Number},
    country:{type:String}
})

const Employee = mongoose.model('Employee',employee);

module.exports = Employee;