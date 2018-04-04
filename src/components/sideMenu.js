import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import clockPink from "../images/clock-pink.png"

const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='FollowerGrowth'>       
            <Nav id='dashboard'>
                <img src={clockPink} className="App-logo" alt="logo" />
            </Nav>
            <Nav id='FollowerGrowth'>
                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
)
export default MySideNav