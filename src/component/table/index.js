import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div>
                <table>
                    {this.props.children}
                </table>
            </div>
         );
    }
}
 
export default Table;