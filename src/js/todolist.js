import React from "react"
import {render} from "react-dom"
import ToDo from "./todo.js"

class ToDoList extends React.Component {

	render() {
		const todos = this.props.todos.map( todo =>
			<ToDo
				key={todo.id}
				{...todo}
				toggleAll={this.props.toggleAll}
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
