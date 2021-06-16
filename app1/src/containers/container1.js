import React, { Component } from 'react';

class Container1 extends Component {


    handleChange = (event) => (
        console.log(event.target.value)
    )

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value)

    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label> Name </label>
                <input id='name' onChange={this.handleChange} type='text'/>
                <button type='submit'> Submit </button>
            </form>
            </div>
        )
    }


}

export default Container1;