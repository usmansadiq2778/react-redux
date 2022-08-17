import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home(props) {
    let navigate = useNavigate();
    function Gohome() {
        // const navigate = useNavigate();
        navigate(-1);
    }
    return (
        <div>
            <h1
                style={{
                    textTransform: 'UpperCase',
                }}
            >
                This is home page
            </h1>
            <h1>{props.count}</h1>

            <Link id='link' to='/footer'>
                Go to footer
            </Link>
            <br />
            <Link id='link' to='/'>
                go to Main
            </Link>
            <br />
            <button onClick={Gohome}>Go to Footer</button>
        </div>
    );
}
export { Home };
