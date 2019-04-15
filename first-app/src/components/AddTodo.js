import React, { Component } from 'react'

export class AddTodo extends Component {
    //This is a example of a component state
    state = {
        title: ''
    }

    //Can now enter information in the form
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    //Submit
    onSubmit = (e) => {
        //Stop submitting to the file
        e.preventDefault();
        //Pass the title up 
        this.props.addTodo(this.state.title);
        //Now clear the field by setting title to nothing
        this.setState({ title: ''});
    }

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
            <input 
                type='text' 
                name='title'
                style={{flex: '10', padding: '5px'}} 
                placeholder='Add Todo ...'
                value={this.state.title}
                onChange={this.onChange}
            />
            <input 
                type='submit' 
                value='Submit'
                className='btn'
                style={{flex: '1'}}
            />
        </form>
    )
  }
}

export default AddTodo;
