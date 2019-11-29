import React, { Component } from 'react'
import Axios from 'axios'

export default class Inbox extends Component {
    state = {
        emails: []
    }
    componentDidMount = () => {
        Axios.get('/api/v1/email')
        .then((emails) => {
            for(let i = 0; i < emails.data.length; i++) {
                let inbox = this.state.emails
                if(emails.data[i].receiver === this.props.currentUser){
                    inbox.unshift(emails.data[i])
                    this.setState({emails: inbox})
                }
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.name}</h1>
                <nav>
                    <ul>
                        <button><li>Inbox</li></button>
                        <button><li>Sent</li></button>
                        <button><li>Contacts</li></button>
                        <button><li>Trash</li></button>
                    </ul>
                </nav>
                
            </div>
        )
    }
}
