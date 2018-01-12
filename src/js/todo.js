import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"

class ToDo extends React.Component {
  render() {
    console.log(this.props.id, this.props.done);
    const { id, toggleStatus, done, title, body, destroy } = this.props;
    return (
      <li>
        <span>{id}</span>
        <input
          type="checkbox"
          onClick={(e) => toggleStatus(e, id)}
          checked={done}
        />
        <p>{title}</p>
        <p>{body}</p>
        <button
          onClick={(e) => destroy(e, id)}
        />
      </li>
    );
  }
}

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  done: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  destroy: PropTypes.func.isRequired,
}

export default ToDo
