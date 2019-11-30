import React, { Component } from 'react'

export default class Inbox extends Component {
    render() {
        let emails = this.state.emails.map((email) => {
            
            console.log(email)
            return (
                <span><p><strong>{email.title}</strong> {email.sender.name}</p></span>
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
