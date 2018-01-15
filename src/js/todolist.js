import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"
import ToDo from "./ToDo.js"
import Radium from "radium"

const styles = {
  wrapper: {
    marginTop: '30px',
    marginLeft: '20px',
    marginRight: '10px',
    paddingLeft: '0',
  },
};

class ToDoList extends React.Component {

  render() {
    const { todos, toggleStatus, destroy } = this.props;
    return (
      <ul style={styles.wrapper}>
        {todos.map((todo, index) => (
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
