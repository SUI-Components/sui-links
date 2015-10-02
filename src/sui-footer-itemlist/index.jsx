import React from 'react';

export default class FooterList extends React.Component{
  render() {
    const list = this.props.group.items.map((item) => {
      return (
        <li className='sui-Footer-group-listitem'>
          <a href={item.link}>
            {item.literal}
          </a>
        </li>
      );
    });

    return (
      <div className='sui-Footer-group'>
        <h2>{this.props.group.block}</h2>
        <ul className='sui-Footer-list'>
          {list}
        </ul>
      </div>
    );
  };
}

FooterList.propTypes = {
  group: React.PropTypes.Object
};
