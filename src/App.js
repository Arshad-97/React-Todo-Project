import React from 'react';
import Todos from './componends/Todos';
import Header from './componends/layout/Header';
import AddItem from './componends/AddItem';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }
// toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }
// Delete todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
  !== id)]});
}
// add todo
addTodo = (title) =>{
  const newTodo ={
    id: 4,
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}
  render(){
    return (
      <div className="App">
        <Header />
        <AddItem addTodo={this.addTodo}/>
       <Todos todos={this.state.todos} markComplete={this.markComplete }
       delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
