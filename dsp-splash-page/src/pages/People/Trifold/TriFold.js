import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trifold1 from "./assets/images/trifold_1.png";
import trifold2 from "./assets/images/trifold_2.png";
import trifold3 from "./assets/images/trifold_3.png";
import "../../Clients/assets/css/clientPagesCSS/clientPages.css";
import "../../Clients/assets/css/clientPagesCSS/mediaClientPages.css";
import { Grid, Row, Col } from 'react-bootstrap';

class TriFold extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4} className="text-right">
            <Link to="../clients/designbuild/trifold">
              <img src={trifold1} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
            </Col>
            <Col xs={4} md={4} className="text-center">
            <Link to="../clients/largecompany/trifold">
              <img src={trifold2} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
            </Col>
            <Col xs={4} md={4} className="text-left">
            <Link to="../clients/boutiquepractice/trifold">
              <img src={trifold3} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
            </Col>
          </Row>
        </Grid>
        {/* <div>
          <div className='col-4 my-2 text-right'>
            <Link to="../clients/designbuild/trifold">
              <img src={trifold1} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
          </div>
          <div className='col-4 my-2 text-center'>
            <Link to="../clients/largecompany/trifold">
              <img src={trifold2} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
          </div>
          <div className='col-4 my-2 text-left'>
            <Link to="../clients/boutiquepractice/trifold">
              <img src={trifold3} alt="trifold" className="miniTrifold" style={{ position: "initial" }} />
            </Link>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default TriFold;