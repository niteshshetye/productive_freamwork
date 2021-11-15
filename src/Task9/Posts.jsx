import React, { Component } from 'react'
import axios from 'axios';

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
        console.log('Constructor Execute...!')
    }

    fetchPosts = async() => {
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts')
        const sortData = data.slice(0,9)
        this.setState({
            posts: [...sortData]
        });
    }
    componentDidMount(){
        this.fetchPosts();
        console.log('Component Did Mount Execute...!')
    }

    componentDidUpdate(prevState){
        console.log('Component Did Update Execute...!', prevState)
    }

    componentWillUnmount(){
        console.log('Component(Posts) Will Unmount Execute...!');
    }

    render() {
        console.log('Render Execute...!')
        return (
            <div className='task9_postDiv'>
                <h2>Posts</h2>
                {
                    this.state.posts.length !== 0? (
                        this.state.posts.map(post => (
                            <div key={post.id}>
                                <h3>Title: {post.title}</h3>
                                <h5>Content: {post.body}</h5>
                            </div>
                        ))
                    ):(
                        <h2>Loading...!</h2>
                    )
                }
            </div>
        )
    }
}
