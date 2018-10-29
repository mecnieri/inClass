import React, { Component } from 'react';

class List extends Component {

    render() {
        return (

            <div className="list__container">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Item"/>
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default List;