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

        <Grid bsClass="trifold-container">
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
    );
  }
}

export default TriFold;