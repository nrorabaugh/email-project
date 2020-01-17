import React, { Component } from 'react'

export default class Email extends Component {
    state = {
        sender: this.props.email.sender,
        receiver: this.props.email.receiver,
        content: ''
    }
    
    componentDidMount = () => {
        console.log(this.props.email)
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
        let contentArr = []
        for(let i=0; i<this.props.email.content.length; i++){
            if((i>0 && this.props.email.content[i] === '\n')){
                contentArr.push('<br\/>')
            } else {
                contentArr.push(this.props.email.content[i])
            }
        }
        let content = contentArr.join('')
        this.setState({content})
    }

    render() {
        if(document.getElementsByClassName('content')[0]){
            let content = document.getElementsByClassName('content')[0]
            content.innerHTML = this.state.content
        }
        return (
            <div className='emailText'>
                <h1>{this.props.email.title}</h1>
                <div className='toFrom'>
                <p>From {this.state.sender}</p>
                <p>To {this.state.receiver}</p>
                </div>
                <p className='content'></p>
            </div>
        )
    }
}
