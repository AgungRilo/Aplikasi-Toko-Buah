import { Input, Label, H1, Button } from '../../component';
import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buah: [],
            nama: "",
            stok: "",
            harga: ""
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        const { nama, stok, harga } = this.state
        return (
            <div className="container">
                <div className="top">
                    <H1 h1="Aplikasi Toko Buah" />
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
                        <Button type="button" name="btn" button="Add" />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Form;

