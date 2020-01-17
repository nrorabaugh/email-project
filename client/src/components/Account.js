import React, { Component } from 'react'
import Inbox from './Inbox'
import Sent from './Sent'
import Compose from './Compose'
export default class Account extends Component {
    state = {
        component: 'Inbox'
    }
    
    shiftComponent = (evt) => {
        let old = document.getElementsByClassName('click')[0]
        old.classList.remove('click')
        if(evt.target.id === 'inbox' || evt.target.id === 'sent' || evt.target.id === 'trash'){
            if(evt.target.className === `parent${evt.target.id}`){
                let li = document.getElementsByClassName(`child${evt.target.id}`)[0]
                evt.target.classList.add('click')
                let component = li.innerHTML
                this.setState({component})
                return
            }
            if(evt.target.className === `child${evt.target.id}`){
                let component = evt.target.innerHTML
                document.getElementsByClassName(`parent${evt.target.id}`)[0].classList.add('click')
                this.setState({component})
                return
            }
        }
        evt.target.classList.add('click')
        let component = evt.target.innerHTML
        this.setState({component})
    }

    render() {
        return (
            <div className='back'>
            <h1>Welcome {this.props.currentUser.name}</h1>
            <div className='page'>
                <div className='nav'>
                    <button id='compose' onClick={this.shiftComponent}>Compose</button>
                    <ul>
                        <button id='inbox' className='parentinbox click' onClick={this.shiftComponent}><li id='inbox' className='childinbox'>Inbox</li></button>
                        <button id='sent' className='parentsent' onClick={this.shiftComponent}><li id='sent' className='childsent'>Sent</li></button>
                        <button id='trash' className='parenttrash' onClick={this.shiftComponent}><li id='trash' className='childtrash'>Trash</li></button>
                    </ul>
                </div>
                <div className='switch'>
                    {this.state.component ==='Inbox'? <Inbox currentUser={this.props.currentUser}/> : null}
                    {this.state.component ==='Sent'? <Sent currentUser={this.props.currentUser}/> : null}
                    {this.state.component ==='Compose'? <Compose currentUser={this.props.currentUser}/> : null}
                    {this.state.component ==='Trash'? <Sent currentUser={this.props.currentUser}/> : null}
                </div>
            </div>
            </div>
        )
    }
}