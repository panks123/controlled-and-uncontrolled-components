import React, { Component } from 'react'

// In a controlled component, form data is handled by a React component itself.
// the form's input elements are controlled by the components state.
// This is achieved by adding a value prop to the input element which is set to the state of the component
// and adding a onChange eventHandler to it which is capable of changing the state based on the input change

// So in controlled component there is only one source of truth i.e. the state of the component

export class ControlledComponet extends Component {
    constructor(){
        super()
        this.state ={
            name: "",
            comment: "comments...",
            language: "English"
        }
    }

    handleOnChangeInput = (e)=>{
        this.setState({name: e.target.value})
    }

    onChangeTextArea = (event)=>{
        this.setState({comment: event.target.value})
    }

    handleSelect = (e)=>{
        this.setState({language: e.target.value})
    }

    handleSubmitControlled = (e)=>{
        console.log("Form data submitted")
        e.preventDefault()
    }


  render() {
    return (
      <div>
        <h2>Controlled component</h2>
        <form onSubmit={this.handleSubmitControlled}>
            <label>Name:</label>
            <input type= "text" value={this.state.name} onChange={this.handleOnChangeInput}></input>
            <div><b>Entered name:</b> {this.state.name}</div>

            {/* In case of textarea also it is similar */}
            <textarea value={this.state.comment} onChange={this.onChangeTextArea}></textarea>
            <div><b>Comments: </b>{this.state.comment}</div>

            {/* In case of select box */}
            {/* Select in react is little different from select in html
                here we set the value to select element as the state value as the default selected value
                And as we are implementing the controlled component so we add a onChange eventHandler to select element            
            */}
            <select value={this.state.language} onChange={this.handleSelect}>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="French">French</option>
            </select>
            <div><b>Selected language: </b>{this.state.language}</div>
            <input type="submit" value="Submit"/>
        </form>
        <hr/>
      </div>
    )
  }
}

export default ControlledComponet
