import React, { Component } from 'react'
import Axios from 'axios'
import Email from './Email'

export default class Inbox extends Component {
    state = {
        emails: [],
        single: ''
    }
    componentDidMount = () => {
        Axios.get('/api/v1/email')
        .then((emails) => {
            for(let i = 0; i < emails.data.length; i++) {
                let inbox = this.state.emails
                let receiver = emails.data[i].receiver.split(', ')
                for(let j=0; j<receiver.length; j++) {
                    if(receiver[j] === this.props.currentUser.username){
                        inbox.unshift(emails.data[i])
                        this.setState({emails: inbox})
                    }
                }
            }
        })
    }
    singleEmail = (evt) => {
        Axios.get(`/api/v1/email/${evt.target.id}`)
        .then((single) => {
            this.setState({single: single.data})
        })
    }
    render() {
        let emails = this.state.emails.map((email) => {
            return (
                <button className='singleEmail'  key={email.id} onClick={this.singleEmail}><span key={email.id}><p id={email.id}><strong>{email.title}</strong> {email.sender}</p></span></button>
            )
        })
        return (
            <div>
            {this.state.single? <Email email={this.state.single} currentUser={this.props.currentUser}/> :
            <div className='inbox'>
                <h1>Emails</h1>
                {emails}
            </div>
            }
            </div>
        )
    }
}
