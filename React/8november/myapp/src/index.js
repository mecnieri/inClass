import React from 'react';
import ReactDOM from 'react-dom'

class Incedision extends React.Component {
    render() {
        const title = 'Incedision';
        const subtitle = 'Put your life in computers hands'
        const options = ['one', 'two', 'three', 'four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options opts={options} />
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
                <button>What should I do ? </button>
            </div>
        )
    }
}
class Options extends React.Component {
    handleRemove() {
        alert("Remove all")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemove}>Remove All</button>
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
        debugger
        if(e.target.children.inp.value){
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