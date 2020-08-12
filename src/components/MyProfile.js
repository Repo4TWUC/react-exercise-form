import React, { Component } from 'react';
import './myProfile.less';
import FormItem, { ITEM_TYPES } from './FormItem';

class MyProfile extends Component {
  constructor () {
    super();
    this.state = {
      data: {
        name: '',
        gender: 'male',
        description: '',
        term: false
      },
      allFieldCompleted: false
    };
  }

  render () {
    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ];
    return (
      <React.Fragment>
        <form className="myProfile">
          <h1>My Profile</h1>
          <FormItem
            keyWord="name"
            label="Name"
            value={this.state.data.name}
            type={ITEM_TYPES.input}
            placeholder="Name"
            onChange={this.handleChange.bind(this, 'name')}
          />

          <FormItem
            keyWord="gender"
            label="Gender"
            value={this.state.data.gender}
            type={ITEM_TYPES.select}
            options={genderOptions}
            onChange={this.handleChange.bind(this, 'gender')}
          />

          <FormItem
            keyWord="description"
            label="Description"
            value={this.state.data.description}
            type={ITEM_TYPES.textarea}
            placeholder="Description of yourself"
            onChange={this.handleChange.bind(this, 'description')}
          />

          <FormItem
            keyWord="term"
            label="I have read the terms of conduct"
            type={ITEM_TYPES.checkbox}
            onChange={this.handleChange.bind(this, 'term')}
          />

          <input
            type="submit"
            id="submit"
            disabled={this.state.allFieldCompleted ? '' : 'disabled'}
            value="Submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </form>
      </React.Fragment>
    );
  }

  handleChange (...args) {
    let key = args[0];
    let termValue, event;

    if (key === 'term') {
      [key, termValue, event] = args;
    } else {
      [key, event] = args;
    }

    const value = key === 'term' ? termValue : event.target.value;
    const newData = Object.assign({}, this.state.data, {
      [key]: value
    });
    this.setState({
      data: newData,
      allFieldCompleted: this.isAllFieldCompleted(newData)
    });
  }

  isAllFieldCompleted ({ name, gender, description, term }) {
    return Boolean(name && gender && description && term);
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state.data);
  }
}

export default MyProfile;
