import React, { Component, useState } from 'react';

class Getdata extends Component {
    constructor() {
        super();
        this.state = {
            name: ' usman sadiq',
            mail: '',
            value: '',
            phone: '03016179323',
        };
    }
    setname = () => {
        this.setState({
            // mail: 'bilalsadiq@gmail.com',
            name: 'Bilal sadiq',
            mail: this.state.value,
        });
    };
    Printdata = () => {
        console.log(this.state.name);
    };
    Handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    // sendprop(){
    //     con
    // }

    render() {
        console.log('props=> :', this.props.name);
        return (
            <div>
                <h2>{this.props.page}</h2>
                <input
                    type='text'
                    name='mail'
                    placeholder='Enter your mail'
                    // onChange={}
                    onChange={(e) => this.Handlechange(e)}
                    // console.log(e.target.value)
                />
                <input
                    name='name'
                    type='text'
                    placeholder='Enter your Name'
                    // onChange={}
                    onChange={(e) => this.Handlechange(e)}
                />
                <h2>My Name is: {this.state.name}</h2>
                <h2>phone: {this.state.phone}</h2>
                <h2>MAil: {this.state.mail}</h2>

                <button onClick={() => this.setname()}>Set-name</button>
                <button onClick={this.Printdata}>Get-data</button>
                <button onClick={() => this.props.getprops('saylani')}>
                    Send props
                </button>
            </div>
        );
    }
}

export { Getdata };
