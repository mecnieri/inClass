import React from 'react'
const Comments = (props) => {
    return (
        <div>
            {
                props.data.map(comment =>
                    (
                        <div key={comments.id}>
                            <h2> comment {comment.body} </h2>
                        </div>
                    )
                )
            }
        </div>
    )
}
export default Comments