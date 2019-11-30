import React, { Component } from 'react'
import Inbox from './Inbox'
import Axios from'axios'

export default class Account extends Component {
    state = {
        emails: []
    }
    componentDidMount = () => {
        Axios.get('/api/v1/email')
        .then((emails) => {
            for(let i = 0; i < emails.data.length; i++) {
                let inbox = this.state.emails
                if(emails.data[i].receiver === this.props.currentUser.id){
                    inbox.unshift(emails.data[i])
                    this.setState({emails: inbox})
                    console.log('emails: '+ this.state.emails)
                }
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.name}</h1>
                <div>
                    <ul>
                        <button><li>Inbox</li></button>
                        <button><li>Sent</li></button>
                        <button><li>Contacts</li></button>
                        <button><li>Trash</li></button>
                    </ul>
                </div>
                <div>
                    <Inbox emails={this.state.emails}/>
                </div>
            </div>
        )
    }
}