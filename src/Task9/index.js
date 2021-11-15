import React, { Component } from 'react'
import Count from './Count';
import Posts from './Posts';

export default class Task9 extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleDisplay: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        console.log('Constructor Execute...!')

    }

    // componentDidMount(){
    //     console.log('Component Did Mount Execute...!')
    // }

    handleToggle(){
        this.setState({toggleDisplay: !this.state.toggleDisplay})
    }
    // componentDidUpdate(prevState){
    //     console.log('Component Did Update Execute...!', prevState)
    // }

    render() {
        console.log('Render Execute...!')
        return (
            <div className='task9_container'>
                <button onClick={this.handleToggle}>Toggle</button>
                {
                    this.state.toggleDisplay? <Count />: <Posts />
                }
            </div>
        )
    }
}

