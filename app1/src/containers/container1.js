import React, { Component } from 'react';

class Container1 extends Component {

    state = { 
        value: '',
    }

    handleChange = (event) => {
        console.log(event.target.value  )
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value)
        this.setState({value: ''})

    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                {this.state.value}
                <label> Name </label>
                <input
                id='name'
                onChange={this.handleChange}
                type='text' value={this.state.value}
                placeholder="name input..."/>
                <button type='submit'> Submit </button>
            </form>
            </div>
        )
    }


}

export default Container1;