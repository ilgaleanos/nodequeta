import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';

class App extends Component {
        constructor(props) {
                super(props);
                this.counter = props.route.counter;
        }

        render() {
                return (
                        <div className="App">
                                <div className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h2>Welcome to React + MobX</h2>
                                </div>
                                <p className="App-intro">
                                        To get started, edit <code>src/App.js</code> and save to reload.
                                </p>
                                <p>
                                        Counter:
                                        <span className={this.counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {this.counter.count} </span>
                                </p>
                                <p>
                                        <button onClick={() => this.counter.increment()}> + </button>
                                        <button onClick={() => this.counter.decrement()}> - </button>
                                </p>
                                <DevTools />
                        </div>
                );
        }
}

export default observer(App);
