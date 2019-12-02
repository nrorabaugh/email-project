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
                let receiver = emails.data[i].receiver.split(', ')
                for(let i=0; i<receiver.length; i++) {
                    if(receiver[i] === this.props.currentUser.username){
                        inbox.unshift(emails.data[i])
                        this.setState({emails: inbox})
                    }
                }
            }
        })
    }
    render() {
        let emails = this.state.emails.map((email) => {
            return (
                <button className='singleEmail' key={email.id}><span><p><strong>{email.title}</strong> {email.sender}</p></span></button>
            )
        })
        return (
            <div className='inbox'>
                <h1>Emails</h1>
                {emails}
            </div>
        )
    }
}
