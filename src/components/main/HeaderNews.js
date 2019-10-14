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
      <Row>
        <Col md={{size: 10, offset: 1}}>
          <Card>
            <CardTitle>Foo</CardTitle>
            <CardBody>
              <Container>
              <Row>
                <Col sm={{size:2}}><Button>Prev</Button></Col>
                <Col>Content</Col>
                <Col sm={{size:2}}><Button>next</Button></Col>
              </Row>
            </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
 }

 export default HeaderNews;