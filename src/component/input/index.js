import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { min,max,value, type, name, id, className, placeholder, onChange} = this.props
        return ( 
            <div>
                <input type={type} min={min} max={max} value={value} id={id} name={name} className={className} placeholder={placeholder} onChange={onChange} />
            </div>
         );
    }
}
 
export default Input;