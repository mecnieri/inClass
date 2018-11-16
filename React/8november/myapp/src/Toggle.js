import React from 'react';
// import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            isVisible: false
        }
    }

    handleVisibility() {
        if (this.state.isVisible) {
            this.setState(() => { return { isVisible: false } })
            debugger
        }
        else {
            this.setState(() => { return { isVisible: true } })
            debugger
        }
        debugger
    }

    render() {
        return (
            <div>
                <h2 style={disabled}>დადად es yleoba amis dedac movtyan</h2>
                {/* <h2 disabled={this.state.isVisible}>vtoglot es yleoba amis dedac movtyan</h2> */ }
        <button onClick={this.handleVisibility}>toggle this mother fucker h2 !!!</button>
            </div >
        )
    }


}



export default Toggle;