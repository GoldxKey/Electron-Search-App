import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class TechInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {info, searchTech} = this.props;

    return (
      <Link to="/">
        <span className="info_tech_tag" onClick={searchTech.bind(this, info)}>
          {info}
        </span>
      </Link>
    )
  }
}

export default TechInfo;
