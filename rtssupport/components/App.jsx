import React, {Component} from 'react';
import Channel from './channels/Channel.jsx';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      activeChannel: {}
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    console.log(name);
    this.setState({ channels });
    // TODO send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    //TODO get channels from server
  }
  render(){
    return(
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;
