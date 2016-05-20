import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import {
  changeStars
} from '../../../Redux/actions/index';

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
    let {stars} = this.props;
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
    let buttonName = advanceSearch ? 'close options' : 'advance search';

    return (
      <div className={advanceSearchContainerClass}>
        <div className={advanceSearchContentClass}>
          <div className="search_stars">
            <span className="search_stars_label">最少星标数</span><br/>
            <input
              ref="starNumber"
              type="number"
              min="0"
              className="search_stars_input"
              value={stars}
              onChange={this.changeStars.bind(this)}
            />
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
    stars: state.parameters.stars
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeStars: (stars) => {
      dispatch(changeStars(stars));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearch);
