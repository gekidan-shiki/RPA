import React from "react"
import {render} from "react-dom"

class ToDo extends React.Component {
  render() {
    console.log(this.props.id, this.props.done);
    const { id, toggleStatus, done, desc, destroy } = this.props;
    return (
      <li>
        <span>{id}</span>
        <input
          type="checkbox"
          onClick={(e) => toggleStatus(e, id)}
          checked={done}
        />
        <p>{desc}</p>
        <button
          onClick={(e) => destroy(e, id)}
          data-id={id}
        />
      </li>
    );
  }
}

export default ToDo
