import React,{Component} from 'react';
import PROJECT from '../assets/data/projects'
const Project1 = props =>{
    const{title,description,link,image}=props.project;
    return(<div style = {{display:'inline-block' , width:300,margin:10}}>
        <h3>{title}</h3>
        <img src={image} alt='nathi image' style={{height:120,width:200}} />
        <p>{description}</p>
        <a href={link}>{link}</a>
    </div>)
}

const Projects = () =>(
    <div>
        <h3>MY PROJECTS</h3>
        <div>
            {
                PROJECT.map(PROJECT => <Project1 key={PROJECT.id} project={PROJECT}/>)
            }
        </div>
    </div>
)
export default Projects;