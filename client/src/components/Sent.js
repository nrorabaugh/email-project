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
                if(emails.data[i].receiver === this.props.currentUser.id){
                    inbox.unshift(emails.data[i])
                    this.setState({emails: inbox})
                    console.log('emails: '+ this.state.emails)
                }
            }
        })
    }
    render() {
        let emails = this.state.emails.map((email) => {
            console.log(email)
            return (
                <span><p><strong>{email.title}</strong> {email.sender.name}</p></span>
            )
        })
        return (
            <div className='inbox'>
                <h1>Sent</h1>
                {emails}
            </div>
        )
    }
}
