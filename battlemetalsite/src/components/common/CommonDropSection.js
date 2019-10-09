import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
/*
WebsiteReact
Peter Roohr
Overview:  
  Common dropdown section component

*/

class CommonDropSection extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false};
  }

  toggle(){
    this.setState(state => ({collapse: !state.collapse}));
  }

  render(){
    return(
      <div>
        <button onClick={this.toggle} color="info" style={{marginBottom: '1rem'}}>{this.props.title}</button>   
        <Collapse isOpen={this.state.collapse}>
        
        </Collapse>
      </div>
    );
  }
};

export default CommonDropSection;