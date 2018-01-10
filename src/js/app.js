import React from "react"
import {render} from "react-dom"
import ToDoList from "./todolist.js"
import Form from "./form.js"
import ActiveList from "./activelist.js"
import { BrowserRouter, Route, Link } from "react-router-dom"


const All = () => (
	<div>
		<h2>ALL</h2>
	</div>
)

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
		const counter = 2;
		this.state = {
			todos: todos,
			counter: counter,
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const desc = e.target.desc.value;
		const todos = this.state.todos.slice();
		todos.push({
			id: this.state.counter + 1,
			desc: desc,
			done: false,
		});

		this.setState({
			todos: todos,
			counter: this.state.counter + 1,
		});
		e.target.desc.value = '';
	}

	toggleStatus(e) {
		const id = parseInt(e.currentTarget.getAttribute('data-id'));
		const todos = this.state.todos.slice();
		for(let i in todos) {
			const todo = todos[i];
			if(todo.id == id) {
				todos[i] = Object.assign({}, todos[i], {
					done: !todo.done,
				});
			}
		}
		this.setState(Object.assign({}, this.state, {todos: todos}));
	}

	destroy(e) {
		const id = parseInt(e.currentTarget.getAttribute('data-id'));
		const todos = this.state.todos.slice();
		for(let i in todos) {
			const todo = todos[i];
			if(todo.id == id) {
				todos.splice(i, 1);
			};
		}
		this.setState(Object.assign({}, this.state, {todos: todos}));
	}

	render() {
		return (
			<div>
				<header className="header">
					<h1>ToDoList</h1>
					<Form handleSubmit={this.handleSubmit.bind(this)}/>
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
							todos={this.state.todos.filter( function( value, index, array ) {
								return value.done == false;
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
		<ToDoApp />
	</BrowserRouter>
), document.getElementById("list"));

