import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
require('../../Page/stylesheet/fab.less');

class FAB extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {handleClick, image, activeTheme, fabIcon} = this.props;
    let fabClass = classNames('fab', {
      activeTheme: activeTheme
    });
    let fabImage;
    if(image) {
      fabImage = (
        <img className="fab_image" src={image} />
      );
    }else {
      fabImage = (
        <i className={"fab_icon fa " + fabIcon} aria-hidden="true"></i>
      );
    }
    return (
      <div className={fabClass} onClick={handleClick.bind(this)}>
        {fabImage}
      </div>
    )
  }
}

export default FAB;
