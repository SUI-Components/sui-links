import React from 'react';
import Link from '../sui-link';
import cx from 'classnames';

export default class LinkList extends React.Component{
  render() {
    const classListItem = cx('sui-LinkList-listItem', {
      'sui-listItem--inline': this.props.displayInline
    });

    return (
      <ul className='sui-LinkList'>
        {this.props.list.map(item => {
            return (
              <li className={classListItem}>
                <Link {...item} />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}

LinkList.propTypes = {
  list: React.PropTypes.array,
  displayInline: React.PropTypes.boolean
};
