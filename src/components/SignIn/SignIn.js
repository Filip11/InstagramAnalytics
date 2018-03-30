import React, { Component } from 'react';
import logo from '../../images/analyticslogo.png';
import '../../styles/Main.css';
import { Button, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon} from 'react-bootstrap';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  render() {
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
	    		<ul>
	              <li>When To Post</li>
	              <li>Follower Growth</li>
	              <li>Top Posts</li>
	        	</ul>
        	</Row>
    	</Col>
	    <Col md={6}>
			<Panel className="Login SignIn-Panel">
				<div className="SignIn-Panel">
					<h2>Sign-in With Instagram</h2>
				</div>
			<Panel.Body>
			<div className="Login">
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