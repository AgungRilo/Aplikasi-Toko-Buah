import React, { Component } from 'react';

class Tabel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
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

                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Tabel;