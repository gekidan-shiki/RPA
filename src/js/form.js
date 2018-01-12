import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"
import Radium from "radium"

class Form extends React.Component {
  render() {
   // console.log(titleValue);
    console.log(value);
    const { value, titleValue,  handleSubmit, handleChange, handleTitleChange } = this.props;
    var styles = {
      form: {
        color: 'blue',  
      },
    };
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            value={titleValue}
            placeholder="Write title"
            onChange={handleTitleChange}
          />
          <input
            name="body"
            type="text"
            value={value}
            placeholder="Write your tasks here!"
            onChange={handleChange}
            style={styles.form}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );

  }
}
module.exports = Radium(Form);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
}

export default Form
