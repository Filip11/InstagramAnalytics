import React, { Component } from 'react';
import logo from '../../images/analyticslogo.png';
import '../../styles/Main.css';
import { Button, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Alert} from 'react-bootstrap';

class SignIn extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    //this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      show: false,
      signedIn: false
    };
  }

  validateForm() {
    //return this.state.username.length > 0 && this.state.password.length > 0;
    return true;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const test = this.state.username == "johndoe1234" && this.state.password == "1234";
    if (!test){
    	this.handleShow();
    	this.setState({ signedIn: false });
    }else{
    	//logged in to application
    	this.setState({ signedIn: true });
    	this.props.history.push("/WhenToPost")
    }
  }
/*
  handleValidation() {
  	const test = this.state.username == "johndoe1234" && this.state.password == "1234";
    if (!test){
    	this.props.isSignedIn(this.state.signedIn);
    }else{
    	//logged in to application
    	this.props.isSignedIn(this.state.signedIn);
    }
  }*/

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {

  	const alert = this.state.show ? (
      	<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
      		<p>
	        Incorrect username or password!
	    	</p>
	  	</Alert>
    ) : (
    	<div>
	      <br />
	      <br />
	      <br />
      	</div>
    );

    return (
    <div className="Main-background">
    <Grid>
		<Col md={6} className="Grid-center">
			<Row className="Grid-center">
				<Col className="MainTitle">
	    			<img className="Logo-large Inline" src={logo}/>
	    			<div className="VerticalLine Inline"></div>
		    		<div className="text-left Inline">
		    			<div>Instagram</div>
		    			<div>Analytics</div>
		    		</div>
	    		</Col>
    		</Row>
    		<Row className="List text-left">
    			<Col>
		    		<ul>
		              <li>When To Post</li>
		              <li>Follower Growth</li>
		              <li>Top Posts</li>
		        	</ul>
	        	</Col>
        	</Row>
    	</Col>
	    <Col md={6} className="Panel-size">
			<Panel className="Login SignIn-Panel">
			<Panel.Body>

			<div className="SignIn-Panel">
				<h2>Sign-in With Instagram</h2>
			</div>

			<div className="Login">

			    {alert}

		        <form className="text-left" onSubmit={this.handleSubmit}>
		          <FormGroup controlId="username" bsSize="large">
		            <ControlLabel>Username</ControlLabel>
				    <InputGroup>
      					<InputGroup.Addon className="Addon">
      						<Glyphicon glyph="user" />
      					</InputGroup.Addon>
		            <FormControl
		              autoFocus
		              type="text"
		              value={this.state.username}
		              onChange={this.handleChange}
		            />
		            </InputGroup>
		          </FormGroup>
		          <FormGroup controlId="password" bsSize="large">
		            <ControlLabel>Password</ControlLabel>
		            <InputGroup>
      					<InputGroup.Addon className="Addon">
      						<Glyphicon glyph="lock" />
      					</InputGroup.Addon>
		            <FormControl
		              value={this.state.password}
		              onChange={this.handleChange}
		              type="password"
		            />
		            </InputGroup>
		          </FormGroup>
		          <Button
		            block
		            bsSize="large"
		            disabled={!this.validateForm()}
		            type="submit"
		          >
		            Sign-in
		          </Button>
		        </form>
		    </div>
		    </Panel.Body>
		    </Panel>
	    </Col>
	   </Grid>
    </div>
    );
  }
}

export default SignIn;