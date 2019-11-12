import React, {Component} from 'react';
import {Container, Col, Row, Card, CardTitle, CardBody, Button} from 'reactstrap';
/**
 * battleMETALsite
 * Peter Roohr
 * Generic header component which displays the current news.
 * news items are json objects piped in from an outside source;
 */


 class HeaderNews extends Component{
  constructor(props){
    super(props);
    this.state = { 
      newsItems :{},
      newsId : 0
    };
    this.getNewsItems = this.getNewsItems.bind(this);
  }

  nextNewsPost(){

  }

  previousNewsPost(){

  }

  getNewsItems(){

  }

  render(){
    return(
      <Row className="justify-content-md-center">
        <Col md={{size:1}} className="right-justify mw-100"><Button><img src="../img/arrow_left.png" alt="previous news"/></Button></Col>
        <Col md={{size: 5}}>
          <Card>
            <CardTitle>Foo</CardTitle>
            <CardBody>
              <Container>
              <Row>
                <Col>Content</Col>
              </Row>
            </Container>
            </CardBody>
          </Card>
        </Col>
        <Col md={{size:1}}><Button><img src="../img/arrow_right.png" alt="next news"/></Button></Col>
      </Row>
    );
  }
 }

 export default HeaderNews;