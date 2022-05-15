import React, { Component } from 'react';
import './Employees.css'
import axios from 'axios';
class Employees extends Component {
    state = {
        employees:[],
        getEmployees:[],
        salary:""||0
    } 

    componentDidMount() {
        axios.get('http://localhost:3001/employees').then(result => {
            this.setState({getEmployees:result.data})
        }).catch(err => {
            console.log(err)
        })
    }

    changeHandle = (e) => {
        const state = {...this.state};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    showHandle = () => {
        const employees = [...this.state.getEmployees];
        this.setState({employees})
    }

    deleteHandle = (id) => {
        let employees = [...this.state.employees];
        employees = employees.filter(emp => emp._id!==id);
        this.setState({employees});

        axios.delete(`http://localhost:3001/employees/${id}`).then(()=>{
            console.log("done")
        }).catch(err => {
            console.log(err)
        })
    }

    editHandle = (emp) => {
        const employees = [...this.state.employees];
        const index = employees.indexOf(emp);
        employees[index].salary = this.state.salary;
        this.setState({employees});

        axios.put(`http://localhost:3001/employees/${emp._id}`,employees[index]).then(()=>{
            console.log("done")
        }).catch(err => {
            console.log(err)
        })
        console.log(emp);
    }
    render() { 
        return (
            <div className='table'>
                <button onClick={this.showHandle} className='btn-show'>Show</button>
                <table id="customers">
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>Salary</th>
                        <th></th>
                    </thead>
                    {this.state.employees.map(emp => (
                        <tbody key={emp.name}>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.country}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={()=> this.deleteHandle(emp._id)} className='btn-show'>delete</button>
                                <button onClick={()=> this.editHandle(emp)} className='btn-show'>edit</button>
                                <input 
                                    type='number' 
                                    id='salary' 
                                    name='salary'
                                    onChange={this.changeHandle}
                                    />
                            </td>
                        </tbody>
                    ))}
                </table>
            </div>
        );
    }
}

export default Employees;