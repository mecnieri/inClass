import React from 'react';
import ReactDOM from 'react-dom'
// import Counter from './Counter.js';
// import Toggle from './Toggle.js';
class Incedision extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handlePick = this.handlePick.bind(this)

        this.state = {
            title: 'Incedision',
            subtitle: 'Put your life in computers hands',
            options: ['one', 'two', 'three', 'four']
        }
    }
    handleRemove() {
        this.setState(() => {
            return { options: [] }
        })
    }
    handlePick() {
        let p = this.state.options.length
        let r = Math.floor(Math.random() * p)
        let cho = this.state.options[r]
        console.log(cho)
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action handlePick={this.handlePick} />
                <Options opts={this.state.options}
                    handleRemove={this.handleRemove} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}>What should I do ? </button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemove}>Remove All</button>
                {
                    this.props.opts.map((element, index) => <Option key={index} el={element} />)
                }
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                {
                    <p>{this.props.el}</p>
                }
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddTo(e) {
        e.preventDefault()
        if (e.target.children.inp.value) {
            alert(e.target.children.inp.value)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTo}>
                    <input name="inp" />
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}




ReactDOM.render(<Incedision />, document.getElementById('root'))
// ReactDOM.render(<Toggle />, document.getElementById('root'))
// ReactDOM.render(<Counter />, document.getElementById('root'))