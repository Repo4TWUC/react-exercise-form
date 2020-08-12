import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { keyWord, value, onChange, type, options } = this.props;
    switch (type) {
      case ITEM_TYPES.input:
        return this.renderInput(keyWord, value, onChange);
      case ITEM_TYPES.select:
        return this.renderSelect(keyWord, value, onChange, options);
      case ITEM_TYPES.textarea:
        return this.renderTextarea(keyWord, value, onChange);
      case ITEM_TYPES.checkbox:
        return this.renderCheckbox(keyWord, value, onChange);
    }
  }

  renderInput (keyWord, value, onChange) {
    return (
      <React.Fragment>
        <label htmlFor={keyWord}>Name</label>
        <input type="text" name={keyWord} onChange={onChange} value={value} id={keyWord} />
      </React.Fragment>
    );
  }

  renderSelect (keyWord, value, onChange, options) {
    const optionsList = options.map(itm =>
      <option value={itm.value} key={itm.value}>{itm.label}</option>
    );
    return (
      <React.Fragment>
        <label htmlFor="gender">Gender</label>
        <select name="gender" value={this.state.gender} id="gender"> {optionsList} </select>)
      </React.Fragment>
    );
  }

  renderTextarea (keyWord, value, onChange) {
    return undefined;
  }

  renderCheckbox (keyWord, value, onChange) {
    return Promise.resolve(undefined);
  }
}

FormItem.propTypes = {
  keyWord: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
};

const ITEM_TYPES = {
  input: 'input',
  select: 'select',
  textarea: 'textarea',
  checkbox: 'checkbox'
};

export default FormItem;
export {
  FormItem,
  ITEM_TYPES
};
