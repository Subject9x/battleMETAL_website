import React, {Component} from 'react';
import {Container, Col, Row, Card, CardTitle, CardBody} from 'reactstrap';
/**
 * battleMETALsite
 * Peter Roohr
 * Generic header component which displays the current news.
 * news items are json objects piped in from an outside source;
 */


 class HeaderNews extends Component{
  constructor(props){
    super(props);
    this.state = { newsItems :{}};
    this.getNewsItems = this.getNewsItems.bind(this);
  }

  getNewsItems(){

  }

  render(){
    return(
      <Row>
        <Col md={{size: 8, offset: 2}}>
          <Card>
            <CardTitle>Foo</CardTitle>
            <CardBody>the news</CardBody>
          </Card>

        </Col>
      </Row>
    );
  }
 }

 export default HeaderNews;