import React from 'react';
import FooterList from '../sui-footer-itemlist';

export default class FooterGroup extends React.Component {
  render (){
    return (
      <FooterList {...this.props} />
    );
  };
}

FooterGroup.propTypes = {
  group: React.PropTypes.Object
};

