
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Connexion extends Component {
    state = {
        pseudo:'',
        goTchat:false
    }

    handleChange = event =>{
        
        const pseudo = event.target.value
        
        this.setState({pseudo})
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({goTchat:true})
    }

    render() {
        if (this.state.goTchat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
    return (
      <div className='connexionBox'> 
        <form className='connexion' onSubmit={this.handleSubmit}>
            <input
            value = {this.state.pseudo}
            onChange = {this.handleChange}
            placeholder='pseudo'
            type='text'
            required
            />
            <button type='submit'>Let' Go</button>
        </form>
      </div>
    );
  }
}
