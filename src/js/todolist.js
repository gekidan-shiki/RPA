import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"
import ToDo from "./ToDo.js"

class ToDoList extends React.Component {

  render() {
    const { todos, toggleStatus, destroy } = this.props;
    return (
      <ul>
        {todos.map(todo => (
            <ToDo 
              key={todo.id}
              {...todo}
              toggleStatus={toggleStatus}
              destroy={destroy}
            />
          )
        )}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
}

export default ToDoList
