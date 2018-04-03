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
	      show: false,
	      postNumber: 1
	    };
	}

	handleClose() {
	    this.setState({ show: false });
	}

	handleShow(value) {
	    this.setState({ show: true, postNumber: value });
	}

  render() {

  	const modalTitle = this.state.postNumber;

    return (
    	<div>
 		<div className="Main-background">
 			<h1 className="Title">Top Posts</h1>
 			<Grid>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<span>#1</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(1)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span>#2</span><br/>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(2)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span>#3</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(3)}/>
	 					</Button>
 					</Col>
 				</Row>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<span>#4</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(4)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span>#5</span><br/>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(5)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span>#6</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="PostImg" src={kitty} onClick={()=>this.handleShow(6)}/>
	 					</Button>
 					</Col>
 				</Row>
 			</Grid>
 			</div>
 		<div>

        <Modal show={this.state.show} onHide={this.handleClose} className="Modal">
          <Modal.Header closeButton>
            <Modal.Title>#{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	
            <img className="Modal-Img img-responsive center-block" src={kitty} />
            <div className="Modal-body">
            <span>04/03/2018</span><br/>
            <span className="text-middle">
            	<Glyphicon glyph="heart" className="text-spacing" />
            	1274
            </span><br/>
            <span>
            	<Glyphicon glyph="comment" className="text-spacing" />
            	734
            </span>
            </div>
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
