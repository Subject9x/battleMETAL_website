import React, { Component } from "react";
import { Row, Col } from "reactstrap";


class CommonHeaderSpanner extends Component{
  render(){
    return(
      <Row>
        <Col md={{size:10,offset:2}}><div><p></p></div></Col>
        <Col md={{size:10,offset:2}}><div><p></p></div></Col>
        <Col md={{size:10,offset:2}}><div><p></p></div></Col>
        <Col md={{size:10,offset:2}}><div><p></p></div></Col>
        <Col md={{size:10,offset:2}}><div><p></p></div></Col>
      </Row>
    );
  }
}

export default CommonHeaderSpanner;