import React, { Component } from 'react'

export default class Email extends Component {
    render() {
        console.log(this.props.email)
        return (
            <div>
                <h1>{this.props.email.title}</h1>
                <p>{this.props.email.sender}</p>
                <p>{this.props.email.content}</p>
            </div>
        )
    }
}
