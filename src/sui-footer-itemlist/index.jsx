import React from 'react';

export default class FooterList extends React.Component{
  render() {
    const list = this.props.group.map(function(item){
      return (
        <li>{item.literal}</li>
      );
    });
    return (
      <div className='group'>
        <ul>
          {list}
        </ul>
      </div>
    );
  };
}

FooterList.propTypes = {
  group: React.PropTypes.Object
};
