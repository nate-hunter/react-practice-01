import React from 'react';

class Cohort extends React.Component {
  render() {
    console.log('Cohorts props', this.props)
    return(
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  };
};

export default Cohort;
