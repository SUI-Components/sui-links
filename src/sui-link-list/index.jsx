import React from 'react';
import Link from '../sui-link';
import cx from 'classnames';

export default class LinkList extends React.Component{

  static get propTypes(){
    return {
      list: React.PropTypes.array,
      displayInline: React.PropTypes.bool
    };
  }

  render() {
    const classListItem = cx('sui-LinkList-listItem', {
      'sui-listItem--inline': this.props.displayInline
    });

    return (
      <ul className='sui-LinkList'>
        {this.props.list.map((item, index) => {
            return (
              <li className={classListItem} key={index}>
                <Link {...item} />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
