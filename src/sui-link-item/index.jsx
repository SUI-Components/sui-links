import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

export default class LinkItem extends React.Component{

  static get propTypes(){
    return {
      url: React.PropTypes.string.isRequired,
      literal: React.PropTypes.string,
      title: React.PropTypes.string,
      target: React.PropTypes.string,
      icon: React.PropTypes.string,
      customclass: React.PropTypes.string,
      handleClick: React.PropTypes.func,
      disabled: React.PropTypes.bool,
      useReactRouterLinks: React.PropTypes.bool
    };
  }

  render() {
    const customclass = cx('sui-Link', {
      [`${this.props.customclass}`]: this.props.customclass
    });

    const classIcon = cx('fa',
      'sui-Link-icon', {[`fa-${this.props.icon}`]: this.props.icon}
    );

    const htmlDisabledLink = (
      <span className={customclass}
        onClick={this.props.handleClick}
        title={this.props.title}>
        {this.props.icon && <span className={classIcon}></span>}
        {this.props.literal}
      </span>
    );

    const htmlLink = (
      <a className={customclass}
         href={this.props.url}
         title={this.props.title}
         target={this.props.target}
         onClick={this.props.handleClick}>
        {this.props.icon && <span className={classIcon}></span>}
        {this.props.literal}
      </a>
    );

    const reactRouterLink = (
      <Link className={customclass}
            target={this.props.target}
            title={this.props.title}
            to={this.props.url}
            onClick={this.props.handleClick}>
        {this.props.icon && <span className={classIcon}></span>}
        {this.props.literal}
      </Link>
    );

    if ( this.props.disabled ) {
      return htmlDisabledLink;
    }

    if ( this.props.useReactRouterLinks ) {
      return reactRouterLink;
    }

    return htmlLink;
  }
}

