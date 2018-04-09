import React, { Component } from 'react';
import '../styles/FollowerGrowth.css';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Stats from './FollowerStats.js';
import SimplePieChart from './SimplePieChart.js';
import {Container,Panel, Col, Row, Grid} from 'react-bootstrap';

const data = [
      {targetDate: '01/01/2017', Followers: 3000},
      {targetDate: '02/01/2017', Followers: 3200},
      {targetDate: '03/01/2017', Followers: 3300},
      {targetDate: '04/01/2017', Followers: 3280},
      {targetDate: '05/01/2017', Followers: 3390},
      {targetDate: '06/01/2017', Followers: 3690},
      {targetDate: '07/01/2017', Followers: 3790},
];
const FollowerGrowth = () => (
	

  <div>
  <div className='subtitle'>
  	<h1>Follower Growth</h1>
  </div>
  	<div className="FollowerChart">
  		
	        	  <AreaChart width={1380} height={580} data={data}
	        	    margin={{ top: 30, right: 30, left: 20, bottom: 60 }}>
	        	    <defs>
	        	    	
	        	      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
	        	        <stop offset="20%" stopColor="#e1306c" stopOpacity={0.8}/>
	        	        <stop offset="80%" stopColor="#f77737" stopOpacity={0.8}/>
	        	        <stop offset="100%" stopColor="#fcaf45" stopOpacity={0.8}/>
	        	      </linearGradient>

	        	    </defs>

	        	   	<XAxis dataKey="targetDate" stroke="white"/>
	        	   	<YAxis stroke="white"/>
	        	   	<CartesianGrid />
	        	   	<Tooltip/>
	        	   	<Legend />
	        		<Area type="monotone" dataKey="Followers" stroke="#833ab4" fillOpacity={1} fill="url(#colorUv)" />
	        	  </AreaChart>	
	        	  </div>
  	{/*
  	<div className="FollowerChart">
  		<Grid fluid={true}>

	      	<Row className="show-grid">
		        <Col md={12}>
		          	
	        	  <AreaChart width={1030} height={500} data={data}
	        	    margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
	        	    <defs>
	        	    	
	        	      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
	        	        <stop offset="20%" stopColor="#e1306c" stopOpacity={0.8}/>
	        	        <stop offset="80%" stopColor="#f77737" stopOpacity={0.8}/>
	        	        <stop offset="100%" stopColor="#fcaf45" stopOpacity={0.8}/>
	        	      </linearGradient>

	        	    </defs>

	        	   	<XAxis dataKey="targetDate" stroke="white"/>
	        	   	<YAxis stroke="white"/>
	        	   	<CartesianGrid />
	        	   	<Tooltip/>
	        	   	<Legend />
	        		<Area type="monotone" dataKey="Followers" stroke="#833ab4" fillOpacity={1} fill="url(#colorUv)" />
	        	  </AreaChart>	

		        </Col>
		        {/*
		        <Col md={2}>
		        
		        	<div className="piechart">
		        		<SimplePieChart />
		        	</div>
		        
		        </Col>
		        
      		</Row>

    	</Grid>
  	

	</div>*/}

			<div className="stats">
			<Stats />
		</div>
  </div>
)

export default FollowerGrowth