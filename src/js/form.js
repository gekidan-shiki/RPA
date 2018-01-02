import React from "react"
import {render} from "react-dom"

class Form extends React.Component {
	render() {
		return (
			<div className="form">
				<form onSubmit={this.props.handleSubmit}>
					<input name="desc" type="text" placeholder="Write your tasks here!"/>
					<button type="submit">Create</button>
				</form>

			</div>
		);
	}
}

export default Form