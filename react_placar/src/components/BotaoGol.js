import React from 'react';

export default class BotaoGol extends React.Component {

    // constructor(){
    //     super();
    //     this.state = {
            
    //     }
    // }

    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Gol!</button>
            </div>
        );
    }
}