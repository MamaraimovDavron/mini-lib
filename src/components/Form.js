import React, { Component } from 'react';
import './library.css';

class Form extends Component{

    state = {
        firstName: "",
        lastName: "",
        email: "",
        isAgree: false,
        visibility: false,
    };


    handleValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleChecked = (e) => {
        this.setState({
        isAgree: e.target.checked,
    }) 
   }

    isValidate = (e) => {
        if(e.target.value.length < 5){
            alert("Please, enter your name fully!");
            return;
        }
    }

    emailChecker = () => {
        const regEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const isValidEmail = regEmail.test(this.state.email);

        const isChecked = this.state.isAgree;

        if(!isValidEmail){
            alert("Please, enter valid email!");
            return;
        }

        if(!isChecked){
            alert("Please, check!");
            return;
        }

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            checked: false,
        });

        alert("Congratulations!");
    };

    componentWillUnmount(){
        if(this.emailChecker){

        }
    }


    render(){
        const { firstName, lastName, email, isAgree, visibility } = this.state;
        return(
            <div className='container form-container' id='form-div'>
                <form className='form-control'>
                    <label htmlFor="firstName">Firstname</label>
                    <input className='form-control' 
                        type="text" name='firstName' 
                        id='firstName' 
                        value={firstName} 
                        onChange={this.handleValue} 
                        onBlur={this.isValidate}/>

                    <label htmlFor="lastName">Lastname</label>
                    <input className='form-control' 
                        type="text" 
                        name='lastName' 
                        id='lastName' 
                        value={lastName} 
                        onChange={this.handleValue} 
                        onBlur={this.isValidate}/>

                    <label htmlFor="email">Email</label>
                    <input className='form-control' 
                        type="email" 
                        name='email' 
                        id='email' 
                        value={email} 
                        onChange={this.handleValue}/>

                <div>
                    <input className='form-check-input me-3' type="checkbox" name="check" id="check" checked={isAgree} onChange={this.handleChecked}/>
                    <label htmlFor="checkbox">Do you love reading ?</label>
                </div>
                    <button className='btn btn-success mt-2' onClick={this.emailChecker}>Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Form;