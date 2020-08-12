import React, { Component } from 'react';
import './myProfile.less';
import FormItem from './FormItem';

class MyProfile extends Component {
  constructor () {
    super();
    this.state = {
      data: {
        name: '',
        gender: 'male',
        desc: '',
        term: false
      }
    };
  }

  render () {
    return (
      <React.Fragment>
        <form>
          <FormItem
            keyWord="name"
            value={this.state.data.name}
            type="input"
            onChange={this.handleChange.bind(this, 'name')}
          />

          <label htmlFor="gender">Gender</label>
          <select name="gender" value={this.state.gender} id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="desc">Description</label>
          <textarea name="desc" value={this.state.desc} placeholder="Description of yourself" id="desc" cols="30" rows="10"/>

          <input type="checkbox" name="term" id="term" value={this.state.term}/>
          <label htmlFor="term">I have read the terms of conduct</label>

          <input type="submit" value="Submit"/>
        </form>
      </React.Fragment>
    );
  }

  handleChange (key, e) {
    const value = e.target.value;
    const newData = Object.assign({}, this.state.data, {
      [key]: value
    });
    this.setState({
      data: newData
    });
  }
}

export default MyProfile;
