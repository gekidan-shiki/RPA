import React from "react"
import {render} from "react-dom"

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				{this.props.value}
			</div>
		);
	}
}

class ToDoList extends React.Component {
	renderCard(i) {
		return <Card value={i} />
	}
	render() {
		return (
			<div>
				<div>ToDoList</div>
				<div className="cardList">
					{this.renderCard(0)}
					{this.renderCard(1)}
					{this.renderCard(2)}
				</div>
			</div>
		);
	}
}
render(<ToDoList />, document.getElementById("root"));