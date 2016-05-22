import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import {
  LANGUAGE_IMAGE_URL
} from '../ConstValue';

class Language extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage() {
    let {changeLanguage, language} = this.props;
    changeLanguage(language.name);
  }

  render() {
    let {language} = this.props;
    let url = '../' + LANGUAGE_IMAGE_URL + language.image;
    return (
      <div className="language_container">
        <div className="language_image_container" onClick={this.changeLanguage.bind(this)}>
          <img src={url}/>
        </div>
      </div>
    )
  }
}

export default Language;
