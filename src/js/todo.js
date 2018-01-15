import React from "react"
import {render} from "react-dom"
import PropTypes from "prop-types"
import Radium from "radium"

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    border: '1px solid #dcdcdc',

    ':hover': {
      background: '#fbfbfb',
    },

  },

  checkBox: {
    display: 'none',
  },

  originalCheckBox: {
    width: '25px',
    height: '25px',
    border: '1px solid #dcdcdc',
    borderRadius: '12.5px',
    textAlign: 'center',

  },
  
  originalCheckedBox: {
    background: '#28a745',
    color: 'white',
    width: '25px',
    height: '25px',
    border: '1px solid #dcdcdc',
    borderRadius: '12.5px',
    textAlign: 'center',
  },

  textContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
  },
  title: {
    marginBottom: '5px',
    padding: '0 10px',
    fontSize: '16px',
    borderBottom: '1px solid #d3d3d3',
  },
  body: {
    marginTop: '5px',
    padding: '0 10px',
    fontSize: '12px',
  },
  deleteButton: {
    marginLeft: '10px',
    border: 'none',
    borderRadius: '50%',
    color: '#dcdcdc',
    
    ':hover': {
      color: '#808080',
    },
  },
};

class ToDo extends React.Component {
  render() {
    const { id, toggleStatus, status, title, body, destroy } = this.props;
    return (
      <li style={styles.list}>
        <input
          type="checkbox"
          onChange={(e) => toggleStatus(e, id)}
          checked={status}
          id={id}
          style={styles.checkBox}
        />
        <label htmlFor={id}>
          {(status === 0) ? <div style={styles.originalCheckBox}></div> : <div style={styles.originalCheckedBox}>&#10003;</div>}
        </label>
        <div style={styles.textContainer}>
          <p style={styles.title}>{title}</p>
          <p style={styles.body}>{body}</p>
        </div>
        <button
          key={id}
          onClick={(e) => destroy(e, id)}
          style={styles.deleteButton}
        >X</button>
      </li>
    );
  }
}
export default Radium(ToDo);

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  destroy: PropTypes.func.isRequired,
}
