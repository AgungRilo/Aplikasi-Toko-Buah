var personId=1;
const nama  = document.querySelector('#nama')
const stok  = document.querySelector('#stok')
const harga = document.querySelector('#harga')
const btn1  = document.querySelector('#btn1')
const btn2  = document.querySelector('#btn2')
const hasil = document.querySelector('#bodyTable');
const belanja = document.querySelector("select[name='buah']")
const beli = document.querySelector("input[name='beli']")


var updatedId = -1;

let fruit=[{

        "id":personId++,
        "nama":"Mangga",
        "stok":3,
        "harga":10000,
    },
    {

        "id":personId++,
        "nama":"Pisang",
        "stok":10,
        "harga":15000,
    }
];

const clearForm=function(){
    nama.value      ="";
    stok.value      ="";
    harga.value     ="";
    beli.value      ="";
}

const inputBuah=function(){
    console.log("Input Buah");
    let fruits={
        "id":personId++,
        "nama":nama.value,
        "stok":stok.value,
        "harga":harga.value,
    }
    fruit.push(fruits);
    clearForm();
    tampilData();

    console.log(fruits);
}

const validasiPembelian=function(){
    if(belanja.value == 0 ){
        alert("Masukkan Nama Buah !")
    }else if(beli.value == ""){
        alert("Masukkan Stok !")
    }else{
        editStok();
    }
}

const validasiBuah = function(nama){
    let idx=fruit.findIndex(el=> el.nama == nama)
    return idx;
}

const validasi=function(){
    
    if(nama.value == "" ){
        alert("Masukkan Nama !")
    }else if(stok.value == ""){
        alert("Masukkan Stok !")
    }else if(harga.value == ""){
        alert("Masukkan Harga !")
    }else {
        console.log(btn1);
        
        if(btn1.innerHTML == "Submit"){
            let hasil = validasiBuah(nama.value);
            if(hasil!=-1){
                alert("Nama Sudah Ada !")
            }
            else{

                console.log("Submit")
                
                inputBuah();
            }    
        } else{
            console.log("Update")
            prosesEdit(btn1.getAttribute("tipeData"));
        }
    }
}

const pembelanjaan = function(){
    belanja.innerHTML=`<option value=0>Pilih Nama Buah</option>`
    for(var i=0;i<fruit.length;i++){
        belanja.innerHTML+=`
        <option value=${fruit[i].id}>${fruit[i].nama}</option>
        `
    }
}

const tampilData=function(){
    
    hasil.innerHTML = "";
    console.log("Tampil Data");
        for(var i = 0 ; i <fruit.length; i++){
            console.log(fruit.nama)
            hasil.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${fruit[i].nama}</td>
                    <td>${fruit[i].stok}</td>
                    <td>${fruit[i].harga}</td>
                    <td>
                        <button class="btn btn-warning" type="button" onclick="edit(${fruit[i].id})">Sunting</button>
                        <button class="btn btn-danger" type="button" onclick="hapus(${fruit[i].id})">Hapus</button>
                    </td>
                </tr>
            `
        }
        pembelanjaan();
    
}
tampilData()


const hapus = function(id){
   const fruits = fruit.find(function(fruits){
       return fruits.id === id;
   }) 
   if(confirm(`Apakah anda ingin menghapus data?`)){
        fruit = fruit.filter(function(fruits){
            return fruits.id !=id
        })
        alert("Berhasil menghapus data")
   }
   tampilData();
}

const edit = function(id){
    const fruits = fruit.find(function(fruits){
        return fruits.id === id;
    });
    updatedId = fruits.id;
    nama.value = fruits.nama;
    stok.value = fruits.stok;
    harga.value = fruits.harga;

    btn1.setAttribute("tipeData", fruits.id);
    btn1.innerHTML ="Update";

}

const prosesEdit= function(id){
    const fruits = fruit.findIndex(function(fruits){

    });
    let idUpdate = parseInt(id)-1;

    let updatedFruits={
        "id" : idUpdate,
        "nama":nama.value,
        "stok": stok.value,
        "harga": harga.value,
    };

    console.log("cari id",idUpdate);
    fruit.splice(idUpdate,1,updatedFruits);
    btn1.innerHTML = "Submit";

    clearForm();
    tampilData();
    alert("Data Berhasil di Update!!")
}

const editStok = function(){
    
    
    const fruitsStok = fruit.find(function(fruits){
        return fruits.id === parseInt(belanja.value);
    });
    console.log("stok",fruitsStok.stok);
    let jumlahBeli= parseInt(beli.value)

    console.log("Jumlah" ,jumlahBeli);
    console.log("harus integer",jumlahBeli);
    if(jumlahBeli <= fruitsStok.stok){
        
        console.log(belanja.value);
        console.log(fruitsStok.stok);
        console.log(fruitsStok.stok);
        let stokBaru = fruitsStok.stok
        
        console.log("cek cek",stokBaru);
        fruitsStok.stok-=beli.value
        console.log("cek cek cek",stokBaru);
        
        clearForm();
        tampilData();
    }else{

         alert("Stok sudah tidak tersedia")
    }
}

