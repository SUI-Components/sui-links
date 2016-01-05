import React from 'react';
import cx from 'classnames';

export default class Link extends React.Component{

  static get propTypes(){
    return {
      url: React.PropTypes.string.isRequired,
      literal: React.PropTypes.string,
      title: React.PropTypes.string,
      target: React.PropTypes.string,
      icon: React.PropTypes.string,
      customclass: React.PropTypes.string,
      handleClick: React.PropTypes.func,
      disabled: React.PropTypes.bool
    };
  }

  render() {
    const customclass = cx('sui-Link', {
      [`${this.props.customclass}`]: this.props.customclass
    });

    const classIcon = cx('fa',
      'sui-Link-icon', {[`fa-${this.props.icon}`]: this.props.icon}
    );

    const disabledLink = (
      <span className={customclass} title={this.props.title}>
        {this.props.icon && <span className={classIcon}></span>}
        {this.props.literal}
      </span>
    );

    const enabledLink = (
      <a className={customclass}
         href={this.props.url}
         title={this.props.title}
         target={this.props.target}
         onClick={this.props.handleClick}>
        {this.props.icon && <span className={classIcon}></span>}
        {this.props.literal}
      </a>
    );

    return this.props.disabled ? disabledLink : enabledLink;
  }
}

