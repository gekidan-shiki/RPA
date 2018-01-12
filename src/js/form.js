import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"

class Form extends React.Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            name="desc"
            type="text"
            value={value}
            placeholder="Write your tasks here!"
            onChange={handleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Form
