import React from 'react';
import cx from 'classnames';

export default class Link extends React.Component{

  static get contextTypes(){
    return {
      i18n: React.PropTypes.object
    };
  }

  static get propTypes(){
    return {
      link: React.PropTypes.string,
      literal: React.PropTypes.string,
      title: React.PropTypes.string,
      target: React.PropTypes.string,
      icon: React.PropTypes.string
    };
  }

  constructor(...args) {
    super(...args);
    this.i18n = this.context.i18n || this.getChildContext().i18n;
  }

  render() {
    const classIcon = cx('fa', 'sui-Link-icon', {
      [`fa-${this.props.icon}`]: this.props.icon
    });

    return (
      <div>
        {this.props.icon && <span className={classIcon}></span>}
        <a href={this.props.link} title={this.i18n.t(this.props.title)} target={this.props.target}>
          {this.i18n.t(this.props.literal)}
        </a>
      </div>
    );
  }
}

