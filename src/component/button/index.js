import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { button, type, name, onClick } = this.props
        return ( 
            <div>
                <button type={type} name={name} onClick={onClick}>{button}</button>
            </div>
         );
    }
}
 
export default Button;