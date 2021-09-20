import React from 'react';
import YearBox from './YearBox/YearBox';
import styles from './Years.module.css';

class Years extends React.Component {
  
  decades = [1960,1970,1980,1990,2000,2010,2020]
  years = [0,1,2,3,4,5,6,7,8,9]
  render() {
    return (
        <div className={styles.block}>
          {
            this.decades.map((decade) => {
              return <div key={decade} className={styles.decade}>
                <p className={styles.decadeNumber}>{decade}</p>
                {
                  this.years.map((year) => {
                    return <YearBox key={decade + year} year={decade + year} />
                  })
                }
              </div>
            })
          }
        </div>
    );
  }
}

export default Years;
