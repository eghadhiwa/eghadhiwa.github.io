let datapasien ={
    nama: '',
    ttl: '',
    umur: 0,
    gender: '',
    alamat: '',
    gejala: '',
    metode: ''
}

let data = {
    Nama: ''
}
function tampil(){
    datapasien.nama = document.getElementById('nama').value
    datapasien.ttl = document.getElementById('ttl').value
    datapasien.umur = document.getElementById('umur').value
    datapasien.gender = document.getElementById('gender').value
    datapasien.alamat = document.getElementById('alamat').value
    datapasien.gejala = document.getElementById('gejala').value
    datapasien.metode = document.getElementById('metode').value
    
    document.getElementById('dataPasien').innerHTML = `Nama : ${datapasien.nama}`
    document.getElementById('tanggal').innerHTML = `Tanggal Lahir : ${datapasien.ttl}`
    document.getElementById('age').innerHTML = `Umur : ${datapasien.umur}`
    document.getElementById('jeniskelamin').innerHTML = `Jenis Kelamin : ${datapasien.gender}`
    document.getElementById('address').innerHTML = `Alamat : ${datapasien.alamat}`
    document.getElementById('keluhan').innerHTML = `Gejala : ${datapasien.gejala}`

    if(datapasien.metode === "swab"){
        document.getElementById('tipe').innerHTML = `Pemeriksaan Tipe ${datapasien.metode} Biaya Sebesar : Rp.750.000`
    } else if(datapasien.metode === 'rapid'){
        document.getElementById('tipe').innerHTML = `Pemeriksaan Tipe ${datapasien.metode} Biaya Sebesar : Rp.90.000`
    }

    document.getElementById('formdata').style.display = 'none';
    document.getElementById('data-user').style.display = 'block';
    
}
document.getElementById('data-user').style.display = 'none';

let buttonsubmit = document.getElementById('buttonsubmit')
buttonsubmit.addEventListener('submit', function (e){
    e.preventDefault()
    tampil()
})
