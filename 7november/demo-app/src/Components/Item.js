import React from 'react';

const Item = (props) => (
    <div className="result">
        <h2>Title  : {props.post.title}</h2>
        <h3>Author</h3>
        <h3>Created at</h3>
        <h3><a href="#">Link To</a></h3>
        <h4>Points</h4>
    </div>

)

export default Item;