import React from "react"
import {render} from "react-dom"
import ActiveToDo from "./activetodo.js"

class ActiveList extends React.Component {
	render() {
		const todos = this.props.todos.map( todo =>
			<ActiveToDo 
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

export default ActiveList
