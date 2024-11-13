const daftarKaryawan = [
    {
    nama: "Devyn Ramirez",
    masaKerja: "10",
    nomorInduk: "1",
    gaji: "7.000.000"
},
{
    nama: "Harmony Duncan",
    masaKerja: "5",
    nomorInduk: "2",
    gaji: "4.000.000"
},
{
    nama: "Clarissa Burgess",
    masaKerja: "8",
    nomorInduk: "3",
    gaji: "7.000.000"
},
{
    nama: "Reilly Blanchard",
    masaKerja: "7",
    nomorInduk: "4",
    gaji: "7.000.000"
},
{
    nama: "Zion Brooks",
    masaKerja: "4",
    nomorInduk: "5",
    gaji: "4.000.000"
},
{
    nama: "Jovanny Mays",
    masaKerja: "10",
    nomorInduk: "6",
    gaji: "7.000.000"
},
{
    nama: "Cindy Chase",
    masaKerja: "9",
    nomorInduk: "7",
    gaji: "7.000.000"
},
{
    nama: "Kristin Mcdaniel",
    masaKerja: "8",
    nomorInduk: "8",
    gaji: "7.000.000"
},
{
    nama: "Macey Sanford",
    masaKerja: "7",
    nomorInduk: "9",
    gaji: "7.000.000"
},
{
    nama: "Alfredo Faulkner",
    masaKerja: "10",
    nomorInduk: "10",
    gaji: "7.000.000"
},
]

let mode= 'tambah'

// CREATE, READ, UPDETE, DELETE
const tampilkanKaryawan = () => {

//mengakses dom
const tblKaryawan = document.getElementById('tblKaryawan')
tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Nomor Induk</th><th>Gaji</th><th>Edit</th><th>Hapus</th></tr>`
    


for(let index in daftarKaryawan) {
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama} berkerja selama ${daftarKaryawan[index].masaKerja} tahun, nomor induk Karyawannya ${daftarKaryawan[index].nomorInduk} dan mendapat gaji sebesar Rp ${daftarKaryawan[index].gaji}`)

        // isi
        tblKaryawan.innerHTML += `<tr><td>${parseInt(index) + 1}.</td><td>${daftarKaryawan[index].nama}</td><td> ${daftarKaryawan[index].masaKerja}</td><td>${daftarKaryawan[index].nomorInduk}</td><td>${daftarKaryawan[index].gaji}</td><td> <button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[index].nomorInduk}')">edit</button></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nomorInduk}')">Hapus</button></tr>`

}
}


const tambahKaryawan = () => {
    const nama = document.getElementById('txtnama').value
    const masaKerja = document.getElementById('txtmasaKerja').value
    const nomorInduk = document.getElementById('txtnomorInduk').value
    const gaji = document.getElementById('txtgaji').value

    const karyawanBaru = {
        nama: nama,
        masaKerja: masaKerja,
        nomorInduk: nomorInduk,
        gaji: gaji,
    }
    //tambah
    if (mode == 'tambah'){
        daftarKaryawan.push(karyawanBaru)
    } else{
        daftarKaryawan[mode] = karyawanBaru
    }
    document.getElementById('txtnama').value =""
    document.getElementById('txtmasaKerja').value =""
    document.getElementById('txtnomorInduk').value =""
    document.getElementById('txtgaji').value =""

    mode ='tambah'

    tampilkanKaryawan()
}

const cariKaryawan = (nomorInduk) => {
    // tampilkan index jika nama siswa === nama
    for (let i = 0; i < daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nomorInduk == nomorInduk) 
            return i
    } 
    return -1

}

const hapusKaryawan = (target) => {
    const karyawanDihapus = cariKaryawan(target)
    // menghapus element dari dalam array
    if (karyawanDihapus !== -1) {
    daftarKaryawan.splice(karyawanDihapus, 1)
    tampilkanKaryawan()
    }
}

const editKaryawan = (target) => {
    const karyawanEdit = cariKaryawan(target) 
    const karyawanDiedit = daftarKaryawan[karyawanEdit];

    document.getElementById('txtnama').value = karyawanDiedit.nama
    document.getElementById('txtmasaKerja').value = karyawanDiedit.masaKerja
    document.getElementById('txtnomorInduk').value = karyawanDiedit.nomorInduk
    document.getElementById('txtgaji').value = karyawanDiedit.gaji

    mode = karyawanEdit
}

const cancel = () => {
    const nama = document.getElementById('txtnama').value =""
    const masaKerja = document.getElementById('txtmasaKerja').value =""
    const nomorInduk = document.getElementById('txtnomorInduk').value =""
    const gaji = document.getElementById('txtgaji').value =""

    mode  = 'tambah'
}
    
    // const karyawanBaru = {
    //     nama: namaBaru,
    //     masaKerja: masaKerjaBaru,
    //     nomorInduk: nomorIndukBaru,
    //     gaji: gajiBaru,
    // }

