import React from 'react';
import YearBox from './YearBox/YearBox';
import styles from './Years.module.css';

class Years extends React.Component {
  
  decades = [1960,1970,1980,1990,2000,2010,2020]
  render() {
    const boxes = {}
    this.props.data.forEach((year) => {
      const decade = []
      boxes.push({year: year, comp: <YearBox key={year.year} year={year.year} fill={year.filled} total={year.total} />})
    })
    return (
      <div className={styles.block}>
        {
          this.decades.map((decade) => {
            return <div key={decade}>
              <p className={styles.decadeNumber}>{decade}-е</p>
              <div>
                {
                  
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
