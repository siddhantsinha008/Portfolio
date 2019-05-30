import React,{Component} from 'react';
import PROFILES from '../assets/data/profile'
const Profile1 = props =>{
    const {image,link}=props.pro;
    return(
        <div style={{display:'inline-block',width:100,margin:5}}>
            <a href={link} ><img src={image} style={{width:35,height:35}}></img></a>
        </div>
    )
}
const Profiles = () => (
<div>
<h2>CONTACT ME :</h2>
<div>
    {PROFILES.map(PROFILES => <Profile1 key={PROFILES.id} pro={PROFILES}/> )}
</div>
</div>
)

export default Profiles