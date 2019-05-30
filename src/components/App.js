import React,{Component} from 'react';
import Project from './Projects';
import Profile from './Profiles';
// import Jokes from './Jokes';
// import Headers from './Headers';
import Title from './Title';
// class regular{}
// class comp extends Component{}

// const r1=new regular()
// const c1=new comp()

// console.log('regular object  ', r1)
// console.log('comp object ',c1)
class App extends Component{
    state={displayBio:false}
    // constructor(){
    //     super()
    //     this.state={ displayBio:false}
    //      this.readMore=()=>{
    //          this.setState({displayBio:true})
    //     console.log('readMore ka this - ',this)
    //      }
    //  this.readMore=this.readMore.bind(this);
    //  console.log('Constructor ka this -',this)
    //  this.showLess=this.showLess.bind(this)
    //     this.toggle=this.toggle.bind(this);
    // }
    //  readMore(){
    //      this.setState({displayBio:true})
    //      console.log('readMore ka this - ',this)
    // }
    // showLess(){
    //         this.setState({displayBio:false})
    // }

    toggle=()=>{
        this.setState({displayBio: !this.state.displayBio})
    }
    render(){
    
        const bio=this.state.displayBio?   
            <div>
                    <h1>Inner Details</h1>
                    {/* <Title /> */}
                    <p>I love watching and playing football</p>
                    <p>I am Bianconeri</p>
                    <button onClick={this.toggle}>Show Less</button>
                    </div>:<button onClick={this.toggle}>Read More</button>;

        return(
            
            <div>
                <h1>Siddhant</h1>
                <p>I am student</p>
                <p>I am going to become COMPUTER ENGINEER</p>
                <Title />
                <br />
                {bio}
                <hr />
                <Project />
                <hr />
                <Profile />
            </div>
        )
        // console.log('hi')
            
    }
}

// const AppwithHeader=()=>{
//     return(
//         <Headers Component={App} />
//     )
// }




export default App;