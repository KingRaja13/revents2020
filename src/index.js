import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/styles.css'
import * as serviceWorker from './serviceWorker';

// hot module replacement

const rootEl = document.getElementById('root');

function render() {
    ReactDOM.render(<App />, rootEl);
}


if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    })
}

render();

//ReactDOM.render(<App />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
