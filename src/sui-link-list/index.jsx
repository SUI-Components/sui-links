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

  render () {
    const classListItem = cx('sui-LinkList-listItem', {
      'sui-ListItem--inline': this.props.displayInline
    })

    return (
      <ul className='sui-LinkList'>
        {this.props.list.map((item, index) => {
          return (
            <li className={classListItem} key={index}>
              <LinkItem {...item} useReactRouterLinks={this.props.useReactRouterLinks} />
            </li>
          )
        })}
      </ul>
    )
  }
}
