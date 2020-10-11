import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './componends/Todos';
import Header from './componends/layout/Header';
import About from './componends/pages/About';
import AddItem from './componends/AddItem';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "take out the trash",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: false
      },
      {
        id: uuidv4(),
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
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" render={props => (
            <React.Fragment>
                <AddItem addTodo={this.addTodo}/>
                 <Todos todos={this.state.todos} markComplete={this.markComplete }
                  delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
