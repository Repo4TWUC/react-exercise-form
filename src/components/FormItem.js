import React from 'react';
import PropTypes from 'prop-types';
import './FormItem.less';

class FormItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    let innerFormItem;
    switch (this.props.type) {
      case ITEM_TYPES.input:
        innerFormItem = this.renderInput();
        break;
      case ITEM_TYPES.select:
        innerFormItem = this.renderSelect();
        break;
      case ITEM_TYPES.textarea:
        innerFormItem = this.renderTextarea();
        break;
      case ITEM_TYPES.checkbox:
        innerFormItem = this.renderCheckbox();
        break;
    }

    return (<div className="form-item">{innerFormItem}</div>);
  }

  renderInput () {
    const { keyWord, value, label, onChange, placeholder } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={keyWord}>{label}</label>
        <input
          type="text"
          name={keyWord}
          onChange={onChange}
          value={value} id={keyWord}
          placeholder={placeholder}
        />
      </React.Fragment>
    );
  }

  renderSelect () {
    const { keyWord, value, label, onChange, options } = this.props;
    const optionsList = options.map(itm =>
      <option value={itm.value} key={itm.value}>{itm.label}</option>
    );
    return (
      <React.Fragment>
        <label htmlFor={keyWord}>{label}</label>
        <select name={keyWord}
          value={value}
          id={keyWord}
          onChange={onChange}
        > {optionsList} </select>
      </React.Fragment>
    );
  }

  renderTextarea () {
    const { keyWord, value, label, onChange, placeholder } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={keyWord}>{label}</label>
        <textarea name={keyWord} value={value}
          placeholder={placeholder}
          id={keyWord}
          cols="30" rows="10"
          onChange={onChange}
        />
      </React.Fragment>
    );
  }

  renderCheckbox () {
    const { keyWord, label, onChange } = this.props;
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          name={keyWord} id={keyWord}
          onChange={(e) => {
            onChange(!!e.target.checked);
          }}
        />
        <label htmlFor={keyWord}>{label}</label>
      </div>
    );
  }
}

FormItem.propTypes = {
  keyWord: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
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
