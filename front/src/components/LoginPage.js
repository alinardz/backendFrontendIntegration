import React, {Component} from 'react';
import {signup, login} from '../services/authService';

export class LoginPage extends Component{

    state = {
        newUser:{}
    }

    componentWillMount(){
        if(localStorage.getItem('user')){
            // const user = JSON.parse(localStorage.getItem('user'));
            // if(user.role !== "ADMIN")
                this.props.history.push('/');
        }
    }

    onChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const {newUser} = this.state;
        newUser[field] = value;
        this.setState({newUser});
    }

    sendUser = () => {
        signup(this.state.newUser)
        .then(user=>{
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))
    }

    loginUser =() =>{
        login(this.state.newUser)
        .then(user=>{
            this.props.history.push('/');
        })
        .catch(e=>console.log(e));
    }


    render(){
        return(
            <div>
                {/* <input onChange={this.onChange} name="username" placeholder="username" type="text"/> */}
                <input onChange={this.onChange} name="email" placeholder="email" type="text"/>
                <input onChange={this.onChange} name="password" placeholder="password" type="password"/>
                <button onClick={this.loginUser}>Login</button>
                
                {/* <input onChange={this.onChange} name="password2" placeholder="repite" type="password"/>
                <button onClick={this.sendUser} disabled={this.state.newUser.password !== this.state.newUser.password2 ? true: false}>Registrarse</button> */}
            </div>
        );
    }
}

