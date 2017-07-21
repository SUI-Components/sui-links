import React, { Component, PropTypes } from 'react'
import LinkItem from '../sui-link-item'
import cx from 'classnames'

export default class LinkList extends Component {
  static get propTypes () {
    return {
      displayInline: PropTypes.bool,
      list: PropTypes.array,
      useReactRouterLinks: PropTypes.bool
    }
  }

  _renderLink = (item, index) => {
    const { displayInline, useReactRouterLinks } = this.props
    const classListItem = cx('sui-LinkList-listItem', {
      'sui-ListItem--inline': displayInline
    })

    return (
      <li className={classListItem} key={index}>
        <LinkItem {...item} useReactRouterLinks={useReactRouterLinks} />
      </li>
    )
  }

  render () {
    return (
      <ul className='sui-LinkList'>
        {this.props.list.map(this._renderLink)}
      </ul>
    )
  }
}
