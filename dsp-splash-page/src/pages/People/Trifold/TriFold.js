import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TriFold extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <div className='row mx-0'>
          <div className='col-lg-4 col-md-4 col-sm-12 my-2'>
            <Link to="../clients/designbuild/trifold">
              <img src={require('./assets/images/trifold_1.png')} width="100%"/>
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 my-2'>
            <Link to="../clients/largecompany/trifold">
              <img src={require('./assets/images/trifold_2.png')} width="100%"/>
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 my-2'>
            <Link to="../clients/boutiquepractice/trifold">
              <img src={require('./assets/images/trifold_3.png')} width="100%"/>
            </Link>
          </div>
        </div>
      </React.Fragment> 
    );
  }
}
 
export default TriFold;