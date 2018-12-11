import React from 'react'

export default class Login extends React.Component {
    onSubmit = (e) => {
        e.preventDefault()
        this.login()
    }


    login = () => {
        fetch('http://localhost:5000/login')
            .then(res => res.json())
            .then(user => {
                console.log(user)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <form className="form form--login" onSubmit={this.onSubmit} >
                <div className="input--group">
                    <label>
                        UserName :
                <input type="text" placeholder="username" />
                    </label>
                </div>
                <div className="input--group">
                    <label>
                        Password :
                <input type="password" placeholder="password" className="form--input" />
                    </label>
                </div>

                <div className="input--group">
                    <button className="btn btn--login">Login
                </button>

                </div>
            </form>
        )
    }
}