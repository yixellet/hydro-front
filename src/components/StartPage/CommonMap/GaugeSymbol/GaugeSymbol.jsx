import React from 'react';
import styles from './GaugeSymbol.module.css';

class GaugeSymbol extends React.Component {
  render() {
    const { id, hovId, name, cx, cy, tm } = this.props
    return (
      <>
        <text transform={tm} className={id === hovId ? styles.text_hovered : styles.text}>
        <tspan x="-29.994" y="21.732">
          <tspan>{name}</tspan>
          </tspan>
        </text>
        <circle className={id === hovId ? styles.circle_hovered : styles.circle} cx={cx} cy={cy} r="6.382"/>
      </>
    );
  }
}

export default GaugeSymbol;
