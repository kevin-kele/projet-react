import React, { Component } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'

class App extends Component {
  state = {
    message: {},
    pseudo:this.props.match.params.pseudo
  }
  addMessage = message =>{
    const messages= {...this.state.message}
    messages[`message-${Date.now()}`] = message
    this.setState({message})
  }
  render () {
    
    return (
      <div className='box'>
        <div>
          <div className="messages">
           <Message/>
          </div>
        </div>
        <Formulaire
        length={140}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
