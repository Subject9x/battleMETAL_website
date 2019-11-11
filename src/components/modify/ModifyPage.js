import React, {Component} from 'react';
import {Container, Col, Row, Card, CardTitle, CardBody} from 'reactstrap';

/**
 * battleMETALsite
 * Peter Roohr
 *
 * modify page details how to modify the game.
 */



class ModifyPage extends Component{

  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Card className="cardMETAL">
              <CardTitle  className="cardTitleMETAL">
                <b><h4>Modifications</h4></b>
              </CardTitle>
              <CardBody>
                <i>battleMETAL</i>, being based on the <i>Darkplaces</i> engine is an open-source project. The <i>Quake C</i> script for the entire game is available for free
                on <a href="https://github.com/Subject9x/battleMETAL" target="...">Github</a>. In addition to the source code, I've also produced a wiki on github to explain
                how to make your own Modifications to the game. One of the main design goals of the project was to allow anyone to adjust the game to their liking and potentially
                add new content. This continues the tradition of <i>Quake</i> modding that <i>battleMETAL</i> is intimately tied to.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="cardMETAL">
              <CardBody>
                The following modifications are currently possible with the existing game code:
                <ul>
                  <li>New weapons/equipment.</li>
                  <li>Custom vehicle textures.</li>
                  <li>Custom music and sound effects.</li>
                  <li>New and editable maps / missions.</li>
                  <li>New and customizable Player HUDs.</li>
                </ul>
                &nbsp;
                <h3><a href="https://github.com/Subject9x/battleMETAL/wiki" target="...">battleMETAL SDK Wiki on Github</a></h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{size:12}}><img className="img-fluid" src="/img/beta1.png" alt="..."></img></Col>
        </Row>
      </Container>
    );
  }
}

export default ModifyPage;