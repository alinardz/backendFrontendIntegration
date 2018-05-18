import React, {Component} from 'react';

export class HomePage extends Component{

    componentWillMount(){
        fetch('http://localhost:3000/private', {credentials:  'include'})
        .then(r=>r.json())
        .then(res=>console.log(res));
    }

    render(){
        return(
            <div>
                Home
            </div>
        );
    }
}

