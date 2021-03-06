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
        let inbox = document.getElementById('inbox')
        inbox.addEventListener('click', () => {
            this.setState({single: ''})
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
            let arr = email.content.split('')
            let newArr = []
            for(let i=0; i<80; i++){
                newArr.push(arr[i])
            }
            let string = newArr.join('')
            return (
            <button className='singleEmail' id={email.id} key={email.id} onClick={this.singleEmail}>
                <span display='inline' id={email.id}>
                    <p style={{color:'rgb(0,0,185)'}}>
                        <strong id={email.id}>{email.title}</strong>
                    </p>
                    <p style={{color:'rgb(0,0,185)'}}>
                        {email.sender}
                    </p>
                    <span className='contentPrev'>
                        <p id={email.id} className='contentPrev'>
                            {string}
                        </p>
                    </span>
                </span>
            </button>
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
