import React from "react"
import {render} from "react-dom"
import ToDoList from "./ToDoList.js"
import Form from "./Form.js"
import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {

  state = {
    todos: [],
    counter: 0,
    value: '',
    titleValue: '',
    user_id: 0,
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleTitleChange(e) {
    this.setState({
      titleValue: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, { id: state.counter + 1, title: state.titleValue, body: state.value, done: 0 }],
        counter: state.counter + 1,
        value: '',
        titleValue: '',
      }
    });
  }

  toggleStatus(e, id) {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map( (todo) => {
          if(todo.id === id) {
            if(todo.done === 0) {
              return {
                ...todo,
                done: 1
              }
            } else if(todo.done === 1) {
              return {
                ...todo,
                done: 0
              }
            } 
          } else {
            return todo
          }
        }),
      };
    })
  }

  destroy(e, id) {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.filter( (todo) => {
          return todo.id != id
        }),
      };
    })
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>ToDoList</h1>
          <Link to='/all'>ALL</Link>
          <Link to='/active'>ACTIVE</Link>
          <Form
            value={this.state.value}
            titleValue={this.state.titleValue}
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange.bind(this)}
            handleTitleChange={this.handleTitleChange.bind(this)}
          />
       </header>
        <Route exact path='/'
          render={() => (
            <div>HELLO</div>
          )}
        />
        <Route path='/all' 
          render={props =>
            <ToDoList 
              todos={this.state.todos}
              {...props}
              toggleStatus={this.toggleStatus.bind(this)}
              destroy={this.destroy.bind(this)}
            />
          }
        />
        <Route path='/active'
          render={props =>
            <ToDoList 
              todos={this.state.todos.filter( (todo) => {
                return todo.done == false;
              })}
              toggleStatus={this.toggleStatus.bind(this)}
              destroy={this.destroy.bind(this)}	
            />
          }
        />
      </div>
    );
  }
}
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("list"));

