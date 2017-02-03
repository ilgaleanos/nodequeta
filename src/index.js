import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  browserHistory } from 'react-router';

import Counter from './components/Counter';
import App from './components/App';
import './index.css';

class Aplication {
        constructor() {
                this._run_();
        }

        _update(){
                window.scrollTo(0, 0);
        }

        _run_() {
                ReactDOM.render(
                        <Router  history={ browserHistory }  onUpdate={ this._update.bind(this) }>
                                <Route path="/" counter={new Counter()}  component={App} />
                        </Router>,
                        document.getElementById('root')
                )
        }
}

new Aplication();
