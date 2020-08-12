import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { keyWord, value, onChange } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={keyWord}>Name</label>
        <input type="text" name={keyWord} onChange={onChange} value={value} id={keyWord} />
      </React.Fragment>
    );
  }
}

FormItem.propTypes = {
  keyWord: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FormItem;
