import React from 'react'
import Post from '../Post/Post';

class Forum extends React.Component {

    state = {
        posts: [],
        newPostBody: '',
    }

    addPost = this.addPost.bind(this)
    handleInputChange = this.handleInputChange.bind(this)

    addPost() {
        const newState = Object.assign({}, this.state)
        newState.posts.push(this.state.newPostBody);
        newState.newPostBody = '';
        this.setState(newState);
    }

    handleInputChange(e) {
        this.setState({
            newPostBody: e.target.value
        })
    }

    render() {
    return (
        <section className="forum">
            {this.state.posts.map((postBody, id) => {
                return (
                    <Post key={id} postBody={postBody} />
                )
            })
            }
            <div className="forum__panel">
                <textarea className="forum__input" onChange={this.handleInputChange}></textarea><br />
                <button className="forum__button" onClick={this.addPost}>post</button>
            </div>
        </section>
    )
    }
}

export default Forum;

