import React, { Component } from 'react';

export default class Formulaire extends Component {
  state = {
      message:'',
      length:this.props.length
  }
  createMessage = ()=>{
      const {addMessage,pseudo} = this.props

      const message = {
          pseudo,
          message:this.state.message
      }
      addMessage(message)

      // reset
      this.setState({message:''})
  }

    handleSubmit = event =>{
    event.preventDefault();
    this.createMessage()
    }

    handleChange = event =>{
        const message = event.target.value;
          const length = this.state.length-message.length
           this.setState({message,length})
       }

    render() {
    return (
      <form
        className='form'
        onSubmit={this.handleSubmit}
        >
        <textarea
            required
            maxLength='140'
            value={this.state.message}
            onChange={this.handleChange}
        />
        <div className='info'>
            {this.state.length}
        </div>
        <button type='submit'>
            Envoyer !
        </button>
      </form>
    );
  }
}
