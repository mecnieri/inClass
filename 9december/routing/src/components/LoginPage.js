import React from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div className="form form--logi" >
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
            </div>
        )
    }
}