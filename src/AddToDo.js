import React, { Component } from 'react'

class AddToDo extends Component {
    state = {
        contant: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit }>
                    <lable>Add new TO DO:</lable>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}
export default AddToDo;