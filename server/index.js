const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001 || 3002

const Employee = require('./models/employeeModel')


app.use(express.json())
app.use(cors())


// post a new employee
app.post('/employees', async (req,res) => {
    const user = await new Employee({
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary,
        country: req.body.country
    });


    await user.save().then((result) => {
        res.send(result);
    }).catch(err => {
        console.log(err)
    })
    
});

// get all the employees
app.get('/employees', async (req,res) => {
    const user = await Employee.find();
    res.json(user);
})


// delete an employee by id
app.delete('/employees/:id', async (req,res) => {
    const user = await Employee.findByIdAndDelete(req.params.id)
    res.json(user);
})


// update an employee by id
app.put('/employees/:id', async (req,res) => {
    const user = await Employee.findByIdAndUpdate(req.params.id,req.body);
    res.json(user);
})








app.listen(PORT, ()=> {
    console.log("server is ready")
})


