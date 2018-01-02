import React from "react"
import {render} from "react-dom"

class ToDo extends React.Component {
	render() {
		return (
			<li>
				<span>{this.props.id}</span>
				<input
					type="checkbox"
					onChange={this.toggleAll}
				/>
				<p>{this.props.desc}</p>
			</li>
		);
	}
}

export default ToDo
