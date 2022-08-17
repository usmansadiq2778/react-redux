import React, { Component, useState } from 'react';
import { Home } from '../componenet/Home';
import { connect } from 'react-redux';
import { set_data } from '../redux store/action/index';

class Life extends Component {
    constructor(props) {
        console.log('cunstructor');
        super(props);
        this.props = props;

        this.state = {
            count: 0,
            data: [],
            error: null,
            DataisLoaded: false,
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('App-Get deriving state from props', state);
    //     // console.log(state);
    //     return null;
    // }

    componentDidMount() {
        console.log('componentdid mont');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => {
                var newData = this.state.data.concat([data]);
                this.setState({
                    data: newData,
                    DataisLoaded: true,
                });

                console.log(data);
            })

            .catch((err) => console.log(err));
    }

    render() {
        // eslint-disable-next-line no-undef
        console.log('redux data =>', this.props);
        const { DataisLoaded, data, count } = this.state;

        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );

        return (
            <>
                <div style={{ justifyContent: 'center' }}>
                    {/* <h1>{count}</h1> */}
                    <Home count={count} />
                    <br></br>
                    <button
                        onClick={() => {
                            this.setState({ count: count + 1 });
                        }}
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => {
                            this.setState({ count: count - 1 });
                        }}
                    >
                        Decrement
                    </button>
                    <br></br>
                    <br />
                    <button
                        onClick={() => {
                            this.props.set_data();
                        }}
                    >
                        set data
                    </button>
                    {}
                    <h1>fecting data from api</h1>
                    <h1 style={{ color: 'green' }}>React life cycle</h1>
                    {data.map((item, i) => {
                        return (
                            <h4
                                style={{ color: 'blue', fontWeight: 'bold' }}
                                key={i}
                            >
                                {item.title}
                            </h4>
                        );
                    })}
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    name: state.app.name,
    Email: state.auth.mail,
    rollnumber: state.auth.rollnumber,
});
const mapDispatchToProps = (dispatch) => ({
    //    sign: () => dispatch(decrementCount()),
    set_data: () => dispatch(set_data()),
});

// export { Life };
export default connect(mapStateToProps, mapDispatchToProps)(Life);
