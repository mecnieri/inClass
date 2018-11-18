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
         }
        else {
            this.setState(() => { return { isVisible: true } })
         }
     }

    render() {
        return (
            <div>
                <button onClick={this.handleVisibility}>toggle this mother fucker h2 !!!</button>
                {this.state.isVisible && <h2 >h1 text</h2>}
            </div >
        )
    }


}



export default Toggle;