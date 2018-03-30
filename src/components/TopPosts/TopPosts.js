import React, { Component } from 'react';
import '../../styles/Main.css';
import '../../styles/TopPosts.css';
import { Button, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import kitty from '../../images/kitty2.jpg';

class TopPosts extends Component {

	constructor(props, context) {
	    super(props, context);

	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);

	    this.state = {
	      show: false
	    };
	}

	handleClose() {
	    this.setState({ show: false });
	}

	handleShow() {
	    this.setState({ show: true });
	}

  render() {

    return (
    	<div>
 		<div className="Main-background">
 			<h1 className="Title">Top Posts</h1>
 			<Grid>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 				</Row>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={this.handleShow}/>
	 					</Button>
 					</Col>
 				</Row>
 			</Grid>
 			</div>
 		<div>

        <Modal show={this.state.show} onHide={this.handleClose} className="Modal" bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>Post Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="Modal-Img img-responsive center-block" src={kitty} />
            <p>
              Likes, comments, date
            </p>
      	 </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
    );
  }
}

export default TopPosts;
