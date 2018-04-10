import React, { Component } from 'react';
import '../styles/FollowerGrowth.css';
import { AdaptionWrapper,LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Stats from './FollowerStats.js';
import {Container,Panel, Col, Row, Grid} from 'react-bootstrap';
import PredefinedRanges from './PredefinedRanges.js';
import moment from 'moment';



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
  		<Grid fluid={true}>
  			<Row>
  				<Col>
	  				<div className='subtitle'>
	  					<h1>Follower Growth</h1>
	  				</div>
	  			</Col>
	  			<Col>
	  				<div className='calendar'>
	  					<PredefinedRanges/>
	  				</div>
	  			</Col>
  			</Row>

  			<Row>
			  	<div>	
				  <AreaChart width={1300} height={500} data={data}
				    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
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
				   	<Tooltip />
					<Area type="monotone" dataKey="Followers" stroke="#833ab4" fillOpacity={1} fill="url(#colorUv)" />
				  </AreaChart>	
				 </div>
			</Row>
			<Row>
			  	<div className="stats">
					<Stats />
				</div>
			</Row>
		</Grid>
	</div>
  
)

export default FollowerGrowth