import React, { Component } from 'react';
import '../styles/WhenToPost.css';
import HeatMap from "react-heatmap-grid"


const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));
 
const WhenToPost = () => (
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    data={data}
  />
)
export default WhenToPost