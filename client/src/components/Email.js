import React, { Component } from 'react'

export default class Email extends Component {
    state = {
        sender: this.props.email.sender,
        receiver: this.props.email.receiver
    }
    
    componentDidMount = () => {
        let receivers = this.props.email.receiver.split(', ')
        for(let i=0; i<receivers.length; i++){
            if(receivers[i] === this.props.currentUser.username) {
                receivers[i] = 'me'
                let receiver = receivers.join(', ') 
                this.setState({receiver})
            }
        }
        if(this.props.email.sender === this.props.currentUser.username){
            this.setState({sender: 'me'})
        }
    }

    render() {
        console.log(this.props.email)
        return (
            <div className='emailText'>
                <h1>{this.props.email.title}</h1>
                <div className='toFrom'>
                <p>From {this.state.sender}</p>
                <p>To {this.state.receiver}</p>
                </div>
                <p className='content'>{this.props.email.content}</p>
            </div>
        )
    }
}
