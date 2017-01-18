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
      icon: React.PropTypes.element,
      className: React.PropTypes.string,
      handleClick: React.PropTypes.func,
      disabled: React.PropTypes.bool,
      useReactRouterLinks: React.PropTypes.bool
    };
  }

  render() {
    const className = cx('sui-Link', {
      [`${this.props.className}`]: this.props.className
    });

    const htmlDisabledLink = (
      <span className={className}
        onClick={this.props.handleClick}
        title={this.props.title}>
        {this.props.icon}
        {this.props.literal}
      </span>
    );

    const htmlLink = (
      <a className={className}
        href={this.props.url}
        title={this.props.title}
        target={this.props.target}
        onClick={this.props.handleClick}>
        {this.props.icon}
        {this.props.literal}
      </a>
    );

    const reactRouterLink = (
      <Link className={className}
        target={this.props.target}
        title={this.props.title}
        to={this.props.url}
        onClick={this.props.handleClick}>
        {this.props.icon}
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
