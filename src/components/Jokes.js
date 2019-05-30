import React ,{Component } from 'react';

export default class Jokes extends Component{
    state={jokes:{},joke:[]};
    componentDidMount(){
         fetch('https://official-joke-api.appspot.com/random_joke')
         .then(response=>response.json())
         .then(json=>this.setState({jokes: json}))
         .catch(error=>alert(error.message));
        
    }

    fetchTenJokes = () => {
        console.log('Hello' )
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response=>response.json())
        .then(json=>this.setState({joke: json}))
        .catch(error=>alert(error.message))
        // .then(json=>console.log(json))
    }
    render(){   
        const {setup,punchline}=this.state.jokes;
        return(   
            <div>
                <h2>Jokes :</h2>
                <p>{setup}<em>{punchline}</em></p>
                <h3>WANT MORE PLZ CLICK BUTTON</h3>
                <button onClick={this.fetchTenJokes}>CLICK</button>
                {
                    this.state.joke.map(joke => {
                        // const{id,type,setup,punchline}=joke;                      
                        return(
                        <p key={joke.id}>
                        {joke.type}
                        <br />
                        {joke.setup}
                        <em>{joke.punchline}</em>
                        </p>
                               )
                    })
                }
            </div>
               )
            }
}