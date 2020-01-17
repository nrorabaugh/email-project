import React, { Component } from 'react'
import axios from 'axios'
import Account from './Account'

export default class Login extends Component {
    state = {
        userRoster: [],
        username: '',
        password: '',
        currentUser: {},
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
    }
    handlePasswordChange = (evt) => {
        let password = evt.target.value
        this.setState({password})  
    }
    validate = (evt) => {
        evt.preventDefault()
        let users = this.state.userRoster
        for(let i=0; i<users.length; i++){ 
            if(this.state.username === users[i].username) {
                if(this.state.password === users[i].password) {
                    this.setState({currentUser: users[i], valid: true})
                    return
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
                {this.state.valid? <Account currentUser={this.state.currentUser}/> :
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.validate}>
                        <input type='text' name='username' placeholder='Username' /*autocomplete='off'*/ onChange={this.handleUsernameChange}/>
                        <input type='password' name='password' placeholder='Password' onChange={this.handlePasswordChange}/>
                        <input type='submit' value='Login'/>
                    </form>
                    <p>New user?</p><button>Create Account</button>
                </div>
                }
            </div>
        )
    }
}
