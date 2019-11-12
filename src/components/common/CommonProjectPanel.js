import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:
    Spun out from Garage page, this is a nice catch-all for project listings on a page

  important props
    linkPath;
    linkVar;
    imagePath
    projectName
    clazz
*/

class CommonProjectPanel extends Component{
  render(){
    return( 
    <Link to={this.props.linkPath + this.props.linkVar} params={this.props.linkVar}>
    <Container className={this.props.clazz + " h-100"}>
        <Row>
            <Col sm={{size:6, offset:3}}><img className="img-fluid" src={this.props.imagePath} alt="placeholder" /></Col>
        </Row>
        <Row>
            <Col sm={{size:10, offset:1}}><b><h3>{this.props.projectName}</h3></b></Col>
        </Row>
    </Container>
    </Link>
    );
  }
}

export default CommonProjectPanel;