import React, { Component } from 'react'

// Uncontrolled component are those components in which form data is not controlled by the component, instead it is controlled by the DOM itself
//  they don’t use any states on input elements or any event handler.
// to acces the value of the element we use refs 
export class UncontrolledComponent extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef(); // This is used to create a ref - ref is something like a pointer which will point to the html element in which we pass the ref prop as this ref(here inputRef)

        this.inputFileRef = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log("Submitted: ", this.inputRef.current.value)
        // console.log(this.inputFileRef.current.file[0].name)
        // alert(`Submitted files details: \n Name of file: ${this.inputFileRef.current.files[0].name}`)
    }
  render() {
    return (
      <div>
        <h2>Uncontrolled component</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Username: </label>
            <input type="text" ref={this.inputRef} defaultValue="anonymous"></input> {/*  With an uncontrolled component, we often want React to specify the initial value, but leave subsequent updates of the input box uncontrolled.
                                                                                            In that case we use 'defaultValue' prop to set default value for the input box */}


            {/* In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically. */}
            <label>Upload files</label>
            <input type="file"></input>
            <button type='submit' ref={this.inputFileRef}> Submit username</button>
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent
