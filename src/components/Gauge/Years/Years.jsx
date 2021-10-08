import React from 'react';
import YearBox from './YearBox/YearBox';
import styles from './Years.module.css';

class Years extends React.Component {
  
  decades = [1960,1970,1980,1990,2000,2010,2020]
  years = [0,1,2,3,4,5,6,7,8,9]
  render() {
    const boxes = []
    this.props.data.forEach((year) => {
      boxes.push(<YearBox key={year.year} year={year.year} fill={year.filled} total={year.total} />)
    })
    return (
      <div className={styles.block}>
        {
          this.decades.map((decade) => {
            return <div key={decade}>
              <p>{decade}-е</p>
              <div>
                {
                  this.years.forEach((year) => {
                    this.props.data.map((box) => {
                      if (Math.trunc(box.year/10)*10 === decade && box.year-Math.trunc(box.year/10)*10 === year) {
                        return <YearBox key={box.year} year={box.year} fill={box.filled} total={box.total} />
                      }
                      return null
                    })
                  })
                }
              </div>
            </div>
          })
        }
      </div>
    );
  }
}

export default Years;
