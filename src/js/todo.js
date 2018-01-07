import React from "react"
import {render} from "react-dom"

class ToDo extends React.Component {
	render() {
		console.log(this.props.id, this.props.done);
		return (
			<li>
				<span>{this.props.id}</span>
				<input
					type="checkbox"
					onClick={this.props.toggleStatus}
					checked={this.props.done}
					data-id={this.props.id}
				/>
				<p>{this.props.desc}</p>
				<button
					onClick={this.props.destroy}
					data-id={this.props.id}
				/>
			</li>
		);
	}
}

export default ToDo
