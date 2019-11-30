import React, { Component } from 'react'
import Inbox from './Inbox'

export default class Account extends Component {
    
    render() {
        
        return (
            <div>
                <h1>Welcome {this.props.currentUser.name}</h1>
                <div>
                    <ul>
                        <button><li>Inbox</li></button>
                        <button><li>Sent</li></button>
                        <button><li>Contacts</li></button>
                        <button><li>Trash</li></button>
                    </ul>
                </div>
                <div>
                    <Inbox currentUser={this.props.currentUser}/>
                </div>
            </div>
        )
    }
}