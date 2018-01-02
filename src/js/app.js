import React from "react"
import {render} from "react-dom"
import ToDoList from "./todolist.js"
import Form from "./form.js"

class ToDoApp extends React.Component {

	constructor() {
		super();
		const todos = [
			{
				id: 1,
				desc: "I am a Reactor",
				done: false
			},
			{
				id: 2,
				desc: "I am a Scrapper",
				done: false
			},
		]
		this.state = {
			todos: todos,
			countToDo: todos.length + 1,
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const desc = e.target.desc.value;
		const todos = this.state.todos.slice();
		const countToDo = this.state.countToDo;

		todos.push({
			id: countToDo,
			desc: desc,
			done: false,
		});

		this.setState({todos});
		this.setState({countToDo: countToDo + 1});

		e.target.desc.value = '';
	}

	toggleAll(event) {
		const checked = event.target.checked;
		this.props.model.toggleAll(checked);
	}

	toggle(todoToToggle) {
		this.props.model.toggle(todoToToggle);
	}

	render() {
		return (
			<div>
				<header className="header">
					<h1>ToDoList</h1>
					<Form handleSubmit={this.handleSubmit.bind(this)}/>
				</header>
				<ToDoList 
					todos={this.state.todos}
					toggleAll={this.toggleAll.bind(this)}
				/>
			</div>
		);
	}
}
render(<ToDoApp />, document.getElementById("list"));
