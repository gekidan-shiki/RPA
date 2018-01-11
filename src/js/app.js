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
  }
  constructor() {
    super();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, { id: state.counter + 1, desc: state.value, done: false }],
        counter: state.counter + 1,
        value: '',
      }
    });
  }

  toggleStatus(e, id) {
    console.log(id)
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map( (todo) => {
          if(todo.id == id) {
            return {
              ...todo, 
              done: !todo.done
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
          <Form
            value={this.state.value}
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
        </header>
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
        <Route path="/active"
          render={props =>
            <ToDoList 
              todos={this.state.todos.filter( function(todo) {
                return todo.done == false;
                }
              )}
              {...props}
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

