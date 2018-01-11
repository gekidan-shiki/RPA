import React from "react"
import {render} from "react-dom"
import ToDo from "./ToDo.js"

class ToDoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
            <ToDo 
              key={todo.id}
              {...todo}
              toggleStatus={this.props.toggleStatus}
              destroy={this.props.destroy}
            />
          )
        )}
      </ul>
    );
  }
}

export default ToDoList
