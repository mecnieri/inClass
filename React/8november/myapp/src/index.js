import React from 'react';
import ReactDOM from 'react-dom'

const obj = {
    title: 'satauri',
    subtitle: 'sataguri',
    options: ["erti", 'ori']
}


const addTo = (e) => {
    e.preventDefault();
    console.log(obj.options);
    obj.options.push(e.target.option.value)
    console.log(obj.options);
    e.target.option.value = '';
    renderOptions()

}



const renderOptions = () => {
    const app = (
        <div>
            <h1>{obj.title}</h1>
            <p>{obj.subtitle}</p>
            <p>{obj.options.join(', ')}</p>
            <form onSubmit={addTo}>
                <input type="text" name="option" />
                <button >add to</button>
            </form>
        </div>
    )
    const i = document.getElementById('root')

    ReactDOM.render(app, i)
}
renderOptions()














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
