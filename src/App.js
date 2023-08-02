import React, { Component } from 'react';
import Library from './components/Library';
import Form from './components/Form';

class App extends Component{
    state = {
        visibility: false,
    };

    showMe = () => {
        this.setState({
            visibility: true,
        })
    };

    close = () => {
        this.setState({
            visibility: false,
        })
    }


    render(){
        const { visibility } = this.state;
        return(
            <div className='container container-app text-center p-3'>
               
                <h1 className='m-3'>Welcome to Mini Library!</h1>
                <button className='btn btn-primary m-3' onClick={this.showMe}>Show me !</button>
                <button className='btn btn-danger m-3' onClick={this.close}>Close !</button>
                
                { !visibility ? <Form /> : "" }
                { visibility ? <Library /> : ""}
                
            </div>
        )
    }
}

export default App;