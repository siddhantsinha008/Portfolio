import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Headers=props=>{
    // const {Component} =props;
    const style ={
        display:'inline-block',
        margin:10,
        marginBottom:20
    }
    return(
        <div>
        <div>
            <h3 style={style}><Link to='/'>Home</Link></h3> 
            <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
            <h3 style={style}><Link to='/music-master'>Music Master</Link></h3>
            {/* <h3 style={style}><a href='/'>Home</a></h3>
            <h3 style={style}><a href='/jokes'>Jokes</a></h3> */}
        </div>
        {/* <Component /> */}

        {props.children}
        </div>
    );
}


export default Headers;