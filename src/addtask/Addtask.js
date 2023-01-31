import React, { Component } from 'react'

export default class Addtask extends Component {


    state = {
        newText:"",
    }


    handleChange=(e)=>{
        this.setState({ newText: e.target.value });
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();


        this.state.newText.trim()==="" ? alert("Add text in the input"):
        this.props.add(this.state.newText);this.setState({ newText: "" });;
    }


  render() {
    return (
      <div>
        <h1>F1 TODO LIST</h1>
        <form  action="" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.newText}  onChange={this.handleChange}/>
            <button type= "Submit">Add</button>

        </form>

      </div>
    )
  }
}


