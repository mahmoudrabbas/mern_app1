import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'

class Sign extends Component {
    state = {
        name:"",
        age:"",
        salary:"",
        country:""
    }
    handleChange = (evt) => {
        const state = {...this.state};
        state[evt.target.name] = evt.target.value;
        this.setState(state);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const state = {...this.state};
        axios.post('http://localhost:3001/employees',state).then(() => {
            console.log('Employee added');
        }).catch(err => {
            console.log(err)
        })
        for (let e in state){
            state[e] = "";
        }
        this.setState(state)

    }
    render() { 
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input
                        autoFocus
                        type='text' 
                        id='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <label htmlFor='age'>Age</label>
                    <input 
                        type='number' 
                        id='age' 
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}/>
                    <label htmlFor='salary'>Salary</label>
                    <input 
                        type='number' 
                        id='salary' 
                        name='salary'
                        value={this.state.salary}
                        onChange={this.handleChange}/>
                    <label htmlFor='country'>Country</label>
                    <input 
                        type='text' 
                        id='country'
                        name='country'
                        value={this.state.country}
                        onChange={this.handleChange}/>
                    <input 
                        type='submit' 
                        className='btn-submit'/>
                </form>
            </>
        );
    }
}

export default Sign;

