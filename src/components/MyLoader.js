import React from 'react';

class MyLoader extends React.Component {
  render() {
    return (
      <div className="loading-background">
        <div className="wrapper w1">
          <div className="cube">
            <div className="side  front"></div>
            <div className="side   back"></div>
            <div className="side  right"></div>
            <div className="side   left"></div>
            <div className="side    top"></div>
            <div className="side bottom"></div>
          </div>
        </div>

      </div>
    )
  }
}
export default MyLoader