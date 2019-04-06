import React, { Component } from 'react'
import Cohort from './Cohort'

class Header extends Component {

  render() {

    const cohortNames = [
      'Matcha',
      'Latte',
      'Tom'
    ];

    const namesArr = cohortNames.map(name => {
      return <Cohort name={name} />
    });

    return(
      <div>
        <Cohort name={namesArr}/>
      </div>
    );
  };
};

export default Header;
