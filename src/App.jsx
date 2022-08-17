// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './style.css';
import { Routers } from './componenet/Router';

// import { NavbarHeader } from './componenet/Header';
// import { Footer } from './componenet/Footer';
// import { Getdata } from './componenet/Getval';
import {Todoapp} from './TodoAPP'

class App extends Component {

   
    render() {
       
        return (
            <div className='App'>
             {/* <Todoapp /> */}
             <Routers />
                
            </div>
        );
    }
}

export { App };
