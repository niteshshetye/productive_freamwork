import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        console.log('Constructor Execute...!')
    }

    componentDidMount(){
        console.log('Component Did Mount Execute...!')
    }
    
    handleClick(process) {
        process === 'increment' && this.setState({...this.state, count: this.state.count+1});
        process === 'decrement' && this.state.count > 0 && this.setState({...this.state, count: this.state.count-1});
    }

    
    componentDidUpdate(prevState){
        console.log('Component Did Update Execute...!', prevState)
    }

    componentWillUnmount(){
        console.log('Component(Count) Will Unmount Execute...!');
    }
    render() {
        console.log('Render Execute...!')
        return (
            <div className='task9_countDiv'>
                <h2 className='task9_count'>{this.state.count}</h2>
                <button onClick={() => this.handleClick('increment')}>Increment</button>
                <button onClick={() => this.handleClick('decrement')}>Decrement</button>
            </div>       
        )
    }
}
