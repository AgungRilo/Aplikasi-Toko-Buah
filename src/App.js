import {Input,Label,Button,H1} from './component';
import React, { Component } from 'react';

import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fruit:[],
      nama: "",
      stok: "",
      harga: "",
      title:"Aplikasi Toko Buah",
      act:0
     }
  }

  save = () => {
    
    const {nama,stok,harga} = this.state
    let newFruit = this.state.fruit
    if (this.state.act === 0) {//input

      newFruit.push({
        nama,stok,harga
      })
      console.log(nama);
      console.log(newFruit);
      this.setState({
        fruit: newFruit,
        nama:"",
        stok:"",
        harga:""
      })
    } else {//update
      let idx = this.state.idx;
    
      this.setState({
        fruit: newFruit,
        act: 0
      })
      alert('Data Berhasil DiUpdate..')
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
      
        <div className="container">
                <div className="top">
                    <H1 h1={this.state.title} />
                    <div>
                        <Label label="Nama Buah" />
                        <Input
                            type="text"
                            name="nama"
                            className="nama"
                            placeholder="Masukkan Nama Buah"
                            value={nama}
                            onChange={this.setValue}
                        />
                    </div>
                    <div>
                        <Label label="Stok" />
                        <Input
                            type="number"
                            min="1"
                            name="stok"
                            className="stok"
                            placeholder="Masukkan Stok Buah"
                            value={stok}
                            onChange={this.setValue}
                        />
                    </div>
                    <div>
                        <Label label="Harga" />
                        <Input
                            type="number"
                            min="1"
                            name="harga"
                            className="harga"
                            placeholder="Masukkan Harga Buah"
                            value={harga}
                            onChange={this.setValue}
                        />
                    </div>
                    <div className="tombol">
                        <Button onClick={this.save}  type="button" name="btn" button="Add" />
                    </div>
                </div>
                <div className="bottom">
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nama Buah</td>
                                <td>Stok</td>
                                <td>Harga Buah</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.fruit.map((fruit, idx) => {
                            return (
                                
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{fruit.nama}</td>
                                    <td>{fruit.stok}</td>
                                    <td>{fruit.harga}</td>
                                    <td>
                                        <button onClick={()=>this.edit(idx)}>Sunting</button>
                                        <button onClick={() =>{ this.props.idx({ idx })} }>Hapus</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                        </tbody>
                    </table>
                </div>
            </div>
      
     );
  }
}
 
export default App;

