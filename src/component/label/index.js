import React, { Component } from 'react';


class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {label}=this.props
        return ( 
            
                <label>{label}</label>
            
         );
    }
}
 
export default Label;
