import React from 'react';
import Loader from 'react-bulma-components/full';

class Loading extends React.Component{
  render() {
    return (<Loader
      style={{
        width: 100,
        height: 100,
        border: '4px solid blue',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
      }}
    />)
  }
}
export default Loading;