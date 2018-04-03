import React, { Component } from 'react';
import '../styles/FollowerGrowth.css';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Stats from './FollowerStats.js'

const data = [
      {targetDate: 'Page A', Followers: 3000},
      {targetDate: 'Page B', Followers: 3200},
      {targetDate: 'Page C', Followers: 3300},
      {targetDate: 'Page D', Followers: 3280},
      {targetDate: 'Page E', Followers: 3390},
      {targetDate: 'Page F', Followers: 3690},
      {targetDate: 'Page G', Followers: 3790},
];
const FollowerGrowth = () => (
  <div className="FollowerChart">
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
  <Stats />
  </div>
)

export default FollowerGrowth