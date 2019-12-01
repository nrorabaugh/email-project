import React, { Component } from 'react'
import Inbox from './Inbox'

export default class Account extends Component {
    state = {
        component: 'Inbox'
    }
    
    render() {
        return (
            <div>
            <h1>Welcome {this.props.currentUser.name}</h1>
            <div className='page'>
                <div className='nav'>
                    <ul>
                        <button><li>Inbox</li></button>
                        <button><li>Sent</li></button>
                        <button><li>Contacts</li></button>
                        <button><li>Trash</li></button>
                    </ul>
                </div>
                <div className='switch'>
                    {this.state.component ==='Inbox'? <Inbox currentUser={this.props.currentUser}/> : null}
                </div>
            </div>
            </div>
        )
    }
}