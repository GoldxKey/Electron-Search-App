import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import {
  changeStars,
  changeTime
} from '../../../Redux/actions/index';
import {
  TIME_OPTIONS
} from '../../ConstValue';
import SearchTime from './SearchTime';

class AdvanceSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advanceSearch: false
    }
  }

  toggleAdvanceSearch() {
    let {advanceSearch} = this.state;
    this.setState({
      advanceSearch: !advanceSearch
    });
  }

  changeStars() {
    let {changeStars} = this.props;
    let value = this.refs.starNumber.value;
    changeStars(value);
  }

  render() {
    let {advanceSearch} = this.state;
    let {stars, changeTime, time} = this.props;
    stars = stars.split('>=')[1];

    let advanceSearchContainerClass = classNames('advance_search_container', {
      default: !advanceSearch
    });
    let advanceSearchContentClass = classNames('advance_search_content', {
      active: advanceSearch
    });
    let advanceSearchButtonClass = classNames('advance_search_button', {
      positive: !advanceSearch,
      negative: advanceSearch
    });
    let buttonName = advanceSearch ? 'close options' : 'advance options';

    let timeOptions = Object.keys(TIME_OPTIONS).map((value, index) => {
      return (
        <SearchTime
          index={index}
          key={index}
          timeKey={value}
          timeName={TIME_OPTIONS[value].name}
          changeSearchTime={changeTime.bind(this)}
          checked={time === value}
        />
      )
    })

    return (
      <div className={advanceSearchContainerClass}>
        <div className={advanceSearchContentClass}>
          <div className="advance_search__options">
            <span className="advance_search__option_label">最少星标数</span><br/>
            <input
              ref="starNumber"
              type="number"
              min="0"
              className="search_stars_input"
              value={stars}
              onChange={this.changeStars.bind(this)}
            />
          </div>
          <div className="advance_search__options search_times">
            <span className="advance_search__option_label">在以下日期范围内搜索</span><br/>
            <div className="advance_search__time_container">
              {timeOptions}
            </div>
          </div>
        </div>
        <div className={advanceSearchButtonClass} onClick={this.toggleAdvanceSearch.bind(this)}>
          {buttonName}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stars: state.parameters.stars,
    time: state.parameters.time
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeStars: (stars) => {
      dispatch(changeStars(stars));
    },
    changeTime: (index) => {
      dispatch(changeTime(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearch);
