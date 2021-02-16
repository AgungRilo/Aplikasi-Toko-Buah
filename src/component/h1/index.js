import React, { Component } from 'react';


class H1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { h1 } = this.props
        return ( 
            <div>
                <h1>{h1}</h1>
            </div>
         );
    }
}
 
export default H1;