import React from 'react';
import cx from 'classnames';

export default class Link extends React.Component{

  static get propTypes(){
    return {
      url: React.PropTypes.string,
      literal: React.PropTypes.string,
      title: React.PropTypes.string,
      target: React.PropTypes.string,
      icon: React.PropTypes.string
    };
  }

  render() {
    const classIcon = cx('fa',
      'sui-Link-icon', {[`fa-${this.props.icon}`]: this.props.icon}
    );

    return (
        <a className='sui-Link' href={this.props.url} title={this.props.title} target={this.props.target}>
          {this.props.icon && <span className={classIcon}></span>}
          {this.props.literal}
        </a>
    );
  }
}

