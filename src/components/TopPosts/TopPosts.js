import React, { Component } from 'react';
import '../../styles/Main.css';
import '../../styles/TopPosts.css';
import { Button, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import kitty from '../../images/kitty2.jpg';
import parliment from '../../images/parliment.jpg';
import mountain from '../../images/mountain.jpg';
import beach from '../../images/beach.jpg';
import nyc from '../../images/nyc.jpg';
import trees from '../../images/trees.jpg';
import kick from '../../images/ronaldokick.jpg';


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
 			<Grid className="grid">
 				<Row>
 				<h1 className="Title Post-subtitle">Top Posts</h1>
 				</Row>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#1</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={beach} onClick={()=>this.handleShow(1)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#2</span><br/>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={kick} onClick={()=>this.handleShow(2)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#3</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={trees} onClick={()=>this.handleShow(3)}/>
	 					</Button>
 					</Col>
 				</Row>
 				<Row>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#4</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={nyc} onClick={()=>this.handleShow(4)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#5</span><br/>
	 					<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={mountain} onClick={()=>this.handleShow(5)}/>
	 					</Button>
 					</Col>
 					<Col className="PostCol" md={4}>
 						<span className="Post-text">#6</span><br/>
 						<Button className="btn-square" bsSize="xsmall">
	 						<img className="newImg" src={parliment} onClick={()=>this.handleShow(6)}/>
	 					</Button>
 					</Col>
 				</Row>
 			</Grid>
 			</div>

 		<div>

        <Modal show={this.state.show} onHide={this.handleClose} className="Modal" bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title className="Post-subtitle">#{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	
            <img className="Modal-Img img-responsive center-block" src={kick} />
            <div className="Modal-body">
            <span className="Post-text">04/03/2018</span><br/>
            <span className="text-middle Post-text">
            	<Glyphicon glyph="heart" className="text-spacing" />
            	1274
            </span><br/>
            <span className="Post-text">
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
