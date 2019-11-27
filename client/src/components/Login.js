import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    state = {
        userRoster: [],
        username: '',
        password: '',
        valid: false
    }
    componentDidMount = () => {
        axios.get('/api/v1/user')
        .then((users) => {
            this.setState({userRoster: users.data})
        })
    }
    handleUsernameChange = (evt) => {
        let username = evt.target.value
        this.setState({username})
        console.log(this.state.username)
    }
    handlePasswordChange = (evt) => {
        let password = evt.target.value
        this.setState({password})
        console.log(this.state.password)
    }
    validate = (evt) => {
        evt.preventDefault()
        let users = this.state.userRoster
        for(let i=0; i<users.length; i++){
            console.log(users[i])
            if(this.state.username === users[i].username) {
                if(this.state.password === users[i].password) {
                    return alert('Login successful')
                } else {
                    return alert('Incorrect password')
                }
            }
        } 
        return alert('No such user')
    }
    render() {
        return (
            <div className='App'>
                <h1>Login</h1>
                <form onSubmit={this.validate}>
                    <input type='text' name='username' placeholder='Username' onChange={this.handleUsernameChange}/>
                    <input type='password' name='password' placeholder='Password' onChange={this.handlePasswordChange}/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}
