import React, { Component, PropTypes } from 'react';

class SearchTime extends Component {
  constructor(props) {
    super(props);
  }

  changeSearchTime() {
    let {index, changeSearchTime} = this.props;
    changeSearchTime(index);
  }

  render() {
    let {timeKey, timeName, checked} = this.props;

    return (
      <div className="time_container">
        <input
          name="search_time"
          id={timeKey}
          type="radio"
          onChange={this.changeSearchTime.bind(this)}
          value={checked}
          checked={checked}
        />&nbsp;&nbsp;&nbsp;
        <label htmlFor={timeKey}>{timeName}</label>
      </div>
    )
  }
}

export default SearchTime;
