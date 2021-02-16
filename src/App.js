
import React, { Component } from 'react';
import {Form} from './template';
import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buah:[],
     }
  }

  setValue = el =>{
    this.setState({
      [el.target.name]:el.target.value
    })
  }

  render() { 
    const {nama,stok,harga} = this.state
    return ( 
      <div>
        <Form />
      </div>
     );
  }
}
 
export default App;

