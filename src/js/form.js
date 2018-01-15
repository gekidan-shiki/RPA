import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"
import Radium from "radium"

const styles = {
  wrapper: {
    margin: '10px',
    marginLeft: '1rem',
    padding: '1rem',
    border: '2px solid #dcdcdc'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxName: {
    margin: '0',
    fontSize: '.8rem',
  },
  titleBox: {
    height: '40px',
    marginTop: '5px',
    marginBottom: '20px',
    paddingLeft: '10px',
    fontSize: '1rem',
    border: '1px solid #c0c0c0',
    borderRadius: '.25rem'
  },
  bodyBox: {
    height: '50px',
    marginTop: '5px',
    paddingLeft: '10px',
    fontSize: '.8rem',
    border: '1px solid #c0c0c0',
    borderRadius: '.25rem'
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
    width: '80px',
    fontSize: '15px',
    color: 'white',
    background: '#007bff',
    padding: '10px 0',
    border: 'none',
    borderRadius: '5px',
  },
}

class Form extends React.Component {
  render() {
    const { value, titleValue,  handleSubmit, handleChange, handleTitleChange } = this.props;
    return (
      <div className="form" style={styles.wrapper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <p style={styles.boxName}>Title</p>
          <input
            name="title"
            type="text"
            value={titleValue}
            placeholder="Write title"
            onChange={handleTitleChange}
            style={styles.titleBox}
          />
          <p style={styles.boxName}>Description</p>
          <input
            name="body"
            type="textarea"
            value={value}
            placeholder="Write your tasks here!"
            onChange={handleChange}
            style={styles.bodyBox}
          />
          <button type="submit" style={styles.button}>Create</button>
        </form>
      </div>
    );

  }
}
export default Radium(Form);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
}
