import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handlechange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your username and password</span>
                <form on onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handlechange={this.handlechange} 
                    label="email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handlechange={this.handlechange}
                    label="password"
                    required />

                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;