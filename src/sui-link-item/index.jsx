import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

export default class LinkItem extends Component {

  static get propTypes () {
    return {
      className: PropTypes.string,
      disabled: PropTypes.bool,
      handleClick: PropTypes.func,
      icon: PropTypes.element,
      literal: PropTypes.string,
      target: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string.isRequired,
      useReactRouterLinks: PropTypes.bool
    }
  }

  render () {
    const className = cx('sui-Link', {
      [`${this.props.className}`]: this.props.className
    })

    const {
      disabled,
      handleClick,
      icon,
      literal,
      target,
      title,
      useReactRouterLinks,
      url
    } = this.props

    if (disabled) {
      return (
        <span className={className}
          onClick={handleClick}
          title={title}>
          {icon}
          {literal}
        </span>
      )
    }

    if (useReactRouterLinks) {
      return (
        <Link className={className}
          target={target}
          title={title}
          to={url}
          onClick={handleClick}>
          {icon}
          {literal}
        </Link>
      )
    }

    return (
      <a className={className}
        href={url}
        title={title}
        target={target}
        onClick={handleClick}>
        {icon}
        {literal}
      </a>
    )
  }
}
