import React, { Component } from 'react'

export default class Email extends Component {
    state = {
        sender: '',
        receiver: ''
    }
    
    render() {
        console.log(this.props.email)
        return (
            <div className='emailText'>
                <h1>{this.props.email.title}</h1>
                <div className='toFrom'>
                <p>From {this.props.email.sender}</p>
                <p>To {this.props.email.receiver}</p>
                </div>
                <p className='content'>{this.props.email.content}</p>
            </div>
        )
    }
}
