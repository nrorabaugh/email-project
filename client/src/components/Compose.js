import React, { Component } from 'react'
import axios from 'axios'

export default class Inbox extends Component {
    mail = (evt) => {
        evt.preventDefault()
        let email = {
            sender: this.props.currentUser.username,
            receiver: evt.target.receiver.value,
            title: evt.target.title.value,
            content: evt.target.content.value
        }
        axios.post('/api/v1/email/', email)
    }
    
    render() {
        return (
            <form className='emailComp' onSubmit={this.mail}>
                <input type='text' name='receiver' placeholder='To:'/>
                <input type='text' name='title' placeholder='Title'/>
                <textarea className='body' type='text' name = 'content'/>
                <input type='submit' value='Send'/>
            </form>
        )
    }
}
