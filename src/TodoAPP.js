import React, { Component } from 'react';
import firebase from '../src/firebaseconfig';
import { getDatabase, push, ref, set } from 'firebase/database';

class Todoapp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [{ title: 'Ali', edit: false }],
            value: '',
        };
    }
    addtodo = () => {
        let obj = { title: this.state.value };

        let num = Math.random() * 100000;
        let key = Math.floor(num);
        console.log(key);

        const db = getDatabase();
        // db.ref('/')

        push(ref(db, 'todos'), {
            ok: obj,
        })
            .then((result) => {
                // Data saved successfully!
                console.log('successfully submited');
            })
            .catch((error) => {
                // The write failed...
                console.log(error);
            });

        // firebase.database().ref('/').child('todos').push(obj);
        // console.log(firebase);
        this.setState({
            // todos: this.state.todos,

            todos: [...this.state.todos, obj],
            value: '',
        });
    };
    Delete = (index) => {
        // console.log(index);
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos,
        });
    };
    Edit = (index, v) => {
        this.state.todos[index].edit = true;

        this.setState({
            todos: this.state.todos,
        });
    };
    Handlechange = (e, index) => {
        this.state.todos[index].title = e.target.value;
        this.setState({
            todos: this.state.todos,
        });
    };
    update = (index) => {
        this.state.todos[index].edit = false;

        this.setState({
            todos: this.state.todos,
        });
    };
    render() {
        let { todos, value } = this.state;
        return (
            <div style={{ paddingTop: '20px' }}>
                <input
                    value={value}
                    type='text'
                    placeholder='Enter your todo'
                    onChange={(e) =>
                        this.setState({
                            value: e.target.value,
                        })
                    }
                ></input>
                <button onClick={this.addtodo}>Add item</button>
                <ul>
                    {todos.map((v, i) => {
                        return (
                            <li key={i}>
                                {v.edit ? (
                                    <input
                                        // value={value}
                                        type='text'
                                        onChange={(e) =>
                                            this.Handlechange(e, i)
                                        }
                                    />
                                ) : (
                                    v.title
                                )}
                                {/* {v.title} */}
                                {v.edit ? (
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => this.update(i)}
                                    >
                                        Update
                                    </button>
                                ) : (
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => this.Edit(i, v.title)}
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    style={{ marginLeft: '10px' }}
                                    onClick={() => this.Delete(i)}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export { Todoapp };
