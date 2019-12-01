import React, { Component } from 'react'
import Inbox from './Inbox'
import Sent from './Sent'
export default class Account extends Component {
    state = {
        component: 'Inbox'
    }
    shiftComponent = (evt) => {
        let component = evt.target.innerHTML
        this.setState({component})
    }
    render() {
        return (
            <div>
            <h1>Welcome {this.props.currentUser.name}</h1>
            <div className='page'>
                <div className='nav'>
                    <ul>
                        <button onClick={this.shiftComponent}><li>Inbox</li></button>
                        <button onClick={this.shiftComponent}><li>Sent</li></button>
                        <button onClick={this.shiftComponent}><li>Contacts</li></button>
                        <button onClick={this.shiftComponent}><li>Trash</li></button>
                    </ul>
                </div>
                <div className='switch'>
                    {this.state.component ==='Inbox'? <Inbox currentUser={this.props.currentUser}/> : null}
                    {this.state.component ==='Sent'? <Sent currentUser={this.props.currentUser}/> : null}
                </div>
            </div>
            </div>
        )
    }
}