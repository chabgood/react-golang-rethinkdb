import React, {Component} from 'react';
import Channel from './Channel.jsx';
import ChannelList from './ChannelList.jsx';
import ChannelForm from './ChannelForm.jsx';
import PropTypes from 'prop-types';

class ChannelSection extends React.Component{
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Channels</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelList {...this.props}/>
          <ChannelForm {...this.props}/>
        </div>
      </div>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired
}

export default ChannelSection;
