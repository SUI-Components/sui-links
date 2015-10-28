import React from 'react';
import i18n from '@schibstedspain/rosetta';
import cx from 'classnames';

export default class Link extends React.Component{
  render() {
    const classIcon = cx('fa', 'sui-Link-icon', {
      [`fa-${this.props.icon}`]: this.props.icon
    });

    return (
      <div>
        {this.props.icon && <span className={classIcon}></span>}
        <a href={this.props.link} title={i18n.t(this.props.title)} target={this.props.target}>
          {i18n.t(this.props.literal)}
        </a>
      </div>
    );
  }
}

Link.propTypes = {
  link: React.PropTypes.string,
  literal: React.PropTypes.string,
  title: React.PropTypes.title,
  target: React.PropTypes.string,
  icon: React.PropTypes.string
};
