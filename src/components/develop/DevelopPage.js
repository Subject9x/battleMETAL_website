import React, {Component} from 'react';
import {Container, Col, Row, Card, CardTitle, CardBody} from 'reactstrap';

/**
 * battleMETALsite
 * Peter Roohr
 * 
 * Dev page gives a quick overview of the development cycle, the toolchains used
 * for building, and the tech stack that runs everything. Included are links
 * to helpful sites.
 */

 class DevelopPage extends Component{
   
  render(){
    return(
    <Container>
      <Row>
        <Col md={{size:5, offset:1}}>
          <DevelopPageLeftPanel />
        </Col>
        <Col md={{size:5}}>
          <DevelopPageRightPanel />
        </Col>
      </Row>
      &nbsp;
      <Row>
        <Col>
          <Container fluid={true}>
            <Row>
              <Col md={{size:2, offset:2}} className="flashPanel"><a href="https://github.com/xonotic/darkplaces" alt="" target="..."><h3>Darkplaces Engine Code</h3></a></Col>
              <Col md={{size:2}} className="flashPanel"><a href="https://icculus.org/twilight/darkplaces/readme.html" target="..."><h3>Darkplaces Website</h3></a></Col>
              <Col md={{size:2}} className="flashPanel"><a href="http://www.insideqc.com/" target="..."><h3>InsideQC</h3></a></Col>
              <Col md={{size:2}} className="flashPanel"><a href="https://kristianduske.com/trenchbroom/" target="..."><h3>Trenchbroom</h3></a></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={{size:12}}><img className="img-fluid" src="/img/base2.png" alt="..."></img></Col>
      </Row>
    </Container>
    );
  }
}

const DevelopPageLeftPanel =(props)=>{
  return(
  <Container>
    <Row>
      <Card className="cardMETAL">
        <CardTitle className="cardTitleMETAL"><b><h4>Source Code</h4></b></CardTitle>
        <CardBody>
        <p><i>battleMETAL</i> is primarily coded in <i>Quake</i>'s scripting language, 'QuakeC' (QC). 
          90% of the original <i>Quake</i>'s QC code has been stripped out and replaced with functionality in service to <i>battleMETAL</i>'s design goals. 
          Some sections of code have been sourced from tutorials online, but a large majority of this code has been written by the designer. 
          You can find the QC source code for <i>battleMETAL</i> by following the link below:
        </p>
        <h4><a href="https://github.com/Subject9x/battleMETAL" target="...">battleMETAL on Github</a></h4>
        </CardBody>
      </Card>
    </Row>
  </Container>
  );
}

const DevelopPageRightPanel =(props)=>{
  return(
  <Container>
    <Row>
      <Card className="cardMETAL">
        <CardTitle className="cardTitleMETAL"><b><h4>Project Development</h4></b></CardTitle>
        <CardBody>
          <p>The designer has been using a task-tracking website called <i>Trello</i> to guide and track the work being done on the game. You can follow along with this progress by visiting the link below.
            A quick primer for understanding this <i>Trello</i> board -
          </p>
          <ul>
            <li><b>[In Progress]</b>- Current Tasks being worked.</li>
            <li><b>[Todo]</b>- Task that will be worked on soon.</li>
            <li><b>[New]</b>- Tasks that have been made recently but not started.</li>
            <li><b>[Backlog]</b>- Non-critical tasks.</li>
            <li><b>[Complete in X]</b>- A log of what has been accomplished per month.</li>
          </ul>
          <p></p>
          <h4><a href="https://trello.com/b/8HKspqBM/battlemetal" target="...">battleMETAL Project Board</a></h4>
        </CardBody>
      </Card>
    </Row>
  </Container>
  );
}
export default DevelopPage;
