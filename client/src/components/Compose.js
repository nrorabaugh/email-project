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
            <div>
                <form className='emailComp' id='email' onSubmit={this.mail}>
                    <input className='compField'type='text' name='receiver' autocomplete='off' placeholder='To:'/>
                    <input className='compField'type='text' name='title' autocomplete='off' placeholder='Title'/>
                    <textarea className='compField'className='body' type='text' name = 'content'/>
                </form>
                <button className='send' type='submit' form='email' value='Send'>Send</button>
            </div>
        )
    }
}
