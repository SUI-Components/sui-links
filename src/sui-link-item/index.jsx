import React, { Component, PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import cx from 'classnames'

export default class LinkItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
    icon: PropTypes.element,
    literal: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
    useReactRouterLinks: PropTypes.bool
  }

  _renderContent () {
    const { icon, literal } = this.props
    return icon && literal ? <span>{icon}{literal}</span> : literal || icon
  }

  render () {
    const className = cx('sui-Link', this.props.className)

    const {
      disabled,
      handleClick,
      icon,
      literal,
      rel,
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
          {this._renderContent()}
        </span>
      )
    }

    if (useReactRouterLinks) {
      return (
        <Link className={className}
          target={target}
          title={title}
          to={url}
          onClick={handleClick}
          rel={rel}>
          {this._renderContent()}
        </Link>
      )
    }

    return (
      <a className={className}
        href={url}
        title={title}
        target={target}
        onClick={handleClick}
        rel={rel}>
        {this._renderContent()}
      </a>
    )
  }
}
