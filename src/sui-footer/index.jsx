import React from 'react';
import FooterGroup from '../sui-footer-group';

export default class Footer extends React.Component {
  render() {
    const footerGroups = this.props.data.map((groups) => {
      return (
          <FooterGroup group={groups} />
      );
    });

    return (
        <div className='sui-Footer'>
          {footerGroups}
        </div>
    );
  }
}

Footer.propTypes = {
  data: React.PropTypes.Array
};
