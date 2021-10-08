import React from 'react';
import './YearBox.css';

class YearBox extends React.Component {
  render() {
    const perc = this.props.fill / this.props.total
    const green = Number(255 * perc)
    const color = {
      backgroundColor: 'rgb(0,'+green+','+green+')',
      width: '15px',
      height: '15px',
      position: 'relative',
      margin: '0',
      border: '1px solid #282c34',
      borderRadius: '3px',
      cursor: 'default',
    };
    return (
        <div style={color}>
          <p className="toolTip">{this.props.year}</p>
        </div>
    );
  }
}

export default YearBox;
