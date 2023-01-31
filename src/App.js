import './App.css';
import React, { Component } from 'react'
import Tasklist from './Component/Tasklist';
import Addtask from './addtask/Addtask';




export default class App extends Component {


  state= {
    tasks:[
      
      ]
  };

  handleDelete=(taskID)=> {this.setState({tasks:this.state.tasks.filter ((el)=>el.id !== taskID)});}
  handleComplete=(IDstar)=> {this.setState({tasks:this.state.tasks.map((el)=>el.id=== IDstar ? {...el, isDone : !el.isDone}:el)})}
  handleAdd=(rassem)=>{const newTask={id:Math.random(), action : rassem , isDone : false}
  this.setState({ tasks:[...this.state.tasks,newTask] });
  }
  
  
  
  render() {
    return (
      <div className="app">
        < Addtask  add={this.handleAdd}/>
        <Tasklist   tab={this.state.tasks} del ={this.handleDelete} comp={this.handleComplete}/>

      </div>
    )
  }
}


