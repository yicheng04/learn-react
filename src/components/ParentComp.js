import React, { Component } from 'react'
import MemoComp from './MemoComp';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yicheng'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Yicheng'
            })
        }, 2000);
    }

    render() {
        console.log('Parent Component Render');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp