import React from 'react';
import ReactDOM from 'react-dom'

const obj = {
    title: "Visibility toggle",
    text: "so, here is some toggle text",
    disable: true
}
const handleDisable = (e) => {
    e.preventDefault();
    obj.disable === true ? obj.disable = false : obj.disable = true;
    renderToggle();
}

const i = document.getElementById('root')

const renderToggle = () => {
    const app = (
        <div>
            <h1>{obj.title}</h1>
            {!obj.disable && <p >{obj.text}</p>}
            <button onClick={handleDisable}>toggle</button>
        </div >
    )

    ReactDOM.render(app, i)
}

renderToggle();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
