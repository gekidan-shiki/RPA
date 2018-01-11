import React from "react"
import {render} from "react-dom"

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

export default Form
