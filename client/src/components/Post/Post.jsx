import React from 'react'

function Post(props) {
    return (
        <section className="post"> 
            <div className="post__panel-container">
            <div className="post__panel-inner-container">
            {/* <h1 className="post__header">post</h1> */}
            {props.postBody}
            </div>
            </div>
        </section>
    )
}

export default Post;
