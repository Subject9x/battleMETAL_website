import React, {Component} from 'react';
import {Modal} from 'reactstrap';
/*
WebsiteReact
Peter Roohr
Overview:
  Common image panel;
    displays an image, that the user can expand by clicking.
    then, user can click-off and the iamge shrinks
*/

class CommonImagePanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      imgLarge : ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <img className="img-thumbnail rounded" src={this.props.src} alt="none" onClick={this.toggle}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <img  src={this.props.src} alt="none" onClick={this.toggle}/>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CommonImagePanel;


