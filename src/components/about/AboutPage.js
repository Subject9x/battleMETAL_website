import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle} from 'reactstrap';

/**
 * battleMETALsite
 * Peter Roohr
 * 
 * About page 
 */

 class AboutPage extends Component{
  constructor(props){
    super(props);
    this.state = { show : false};
  }
  render(){
    return(
      <Container>
        <Row>
          <Col md={{size:4}}>
            <Card>
              <CardTitle><b><h3>The Game</h3></b></CardTitle>
              <CardBody>
                <p><i>battleMETAL</i> is a successor to the 90's mech simulators of old. A delightful modernization of commanding giant robots bristling with firepower. 
                  Players choose and customize their war machines known as <i>METALS</i>, and then drop into the blighted world of Geiserath. 
                </p>
                <p>Players will be tasked with completing a variety of mission types, and must select and work with the available equipment.</p>
              </CardBody>
            </Card>
          </Col>

          <Col md={{size:4}}>
            <Card>
              <CardTitle><b><h3>The Tech</h3></b></CardTitle>
              <CardBody>
                <p><i>battleMETAL</i> is built upon the <i>Darkplaces</i> Engine which itself is a source port of the classic first person shooter, <i>Quake</i>. 
                  The game leverages the extensions of the <i>Darkplaces</i> engine to deliver a unique game experience of giant robot combat.</p>
                <p>Being based on the dependable <i>Quake</i> engine and bolstered by the major extensions that <i>Darkplaces</i> provides, <i>battleMETAL</i> 
                  can pretty much run on almost any modern system with speed. 
                </p>
              </CardBody>
            </Card>
          </Col>
 
          <Col md={{size:4}} className="h-100">
            <Card>
              <CardTitle><b><h3>The Design</h3></b></CardTitle>
              <CardBody>
                <p>The game designer, principal coder, model maker, and ui designer is Peter Roohr. You can find out more about him by following the
                link below to his website</p>
                <a href="https://roohrorbitalyards.com">Roohr Orbital yards</a>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{size:12}}><img className="img-fluid" src="/img/oldschool2.png" alt="..."></img></Col>
        </Row>
      </Container>
    );
  }
 } 

 export default AboutPage;

 