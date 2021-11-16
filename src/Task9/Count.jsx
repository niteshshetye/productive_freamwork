import React, { Component } from 'react'

export default class Count extends Component {
    // excute before rendering the component
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        console.log('Constructor Execute...!')
    }

    componentDidMount(){
        // execute after the component mount on UI
        console.log('Component Did Mount Execute...!')
    }
    
    handleClick(process) {
        process === 'increment' && this.setState({...this.state, count: this.state.count+1});
        process === 'decrement' && this.state.count > 0 && this.setState({...this.state, count: this.state.count-1});
    }

    
    componentDidUpdate(prevState){
        // Execute after state change and re-render the component
        console.log('Component Did Update Execute...!', prevState)
    }

    componentWillUnmount(){
        // Excute just before component un-mount
        console.log('Component(Count) Will Unmount Execute...!');
    }
    render() {
        // Excute after constructor
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
