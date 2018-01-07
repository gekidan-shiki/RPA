import React from "react"
import {render} from "react-dom"
import ToDo from "./todo.js"

class ToDoList extends React.Component {

	render() {
		const todos = this.props.todos.map( todo =>
			<ToDo
				key={todo.id}
				{...todo}
				toggleStatus={this.props.toggleStatus}
				destroy={this.props.destroy}
			/>
		);

		return (
			<ul>
				{todos}
			</ul>
		);
	}
}

export default ToDoList
