import React,{Component }  from 'react';
const TITLE=[
    'Genius',
    'Billionaire',
    'Philantrophist',
    'Playboy',
]

export default class Title extends Component{


    state={titleIndex:0,fadeIn:true}
    componentDidMount(){
        setTimeout(()=> this.setState({fadeIn:false}),2000)
        // console.log('title component did mount ')
        this.animateTitle();
    }

    componentWillUnmount(){
        // console.log('title component is unmounted ')

        clearInterval(this.titleInterval);
        
    }
    
    animateTitle = () =>{
        this.titleInterval = setInterval(()=>{
                        const titleIndex=(this.state.titleIndex + 1)%TITLE.length;
                        this.setState({titleIndex,fadeIn:true});
                          setTimeout(()=> this.setState({fadeIn:false}),2000)
                        },4000)

    
        // console.log('titleInterval',this.titleInterval)
    }
    


    render(){
        const {fadeIn,titleIndex}=this.state
        const title=TITLE[titleIndex]
        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}