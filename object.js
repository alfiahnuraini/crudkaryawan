
//object 

const daftarSiswa = [
    {
        nama: "Rosa",
        jeniskelamin: "P",
        umur: "17",
        warna: "Kuning",
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama: "Riski",
        jeniskelamin: "L",
        umur: "16",
        warna: "Merah",
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga'] 
    },
    {
        nama: "Ambar",
        jeniskelamin: "P",
        umur: "16",
        warna: "Ungu",
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga'] 
    },
    {
        nama: "Mila",
        jeniskelamin: "P",
        umur: "18",
        warna: "Biru",
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama: "Bagas",
        jeniskelamin: "L",
        umur: "15",
        warna: "Coklat",
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    }
]

let mode = 'tambah'

// CREATE, READ, UPDETE, DELETE

const tampilkanSiswa = () => {

    //mengakses dom
    const tblSiswa = document.getElementById('tblSiswa')
    tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Warna Favorit</th><th>Umur</th><th>Edit</th><th>Hapus</th></tr>`
    

    for(let index in daftarSiswa) {
       console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} berjenis kelamin ${daftarSiswa[index].jeniskelamin} suka warna ${daftarSiswa[index].warna} dan umurnya ${daftarSiswa[index].umur}`)


       //menambah isi
       tblSiswa.innerHTML += `<tr><td>${parseInt(index) + 1}.</td><td>${daftarSiswa[index].nama}</td><td> ${daftarSiswa[index].jeniskelamin}</td><td>${daftarSiswa[index].warna}</td><td>${daftarSiswa[index].umur}</td><td> <button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[index].nama}')">edit</button></td><td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Hapus</button></tr>`
    }
}

const tambahSiswa = () => {
    const nama = document.getElementById('txtnama').value
    const jeniskelamin = document.getElementById('txtjeniskelamin').value
    const umur = document.getElementById('txtumur').value
    const warna = document.getElementById('txtwarna').value

    const siswaBaru = {
        nama: nama,
        jeniskelamin: jeniskelamin,
        umur: umur,
        warna: warna,
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    }
    
    //ditambah
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[mode] = siswaBaru
    }

    document.getElementById('txtnama').value =""
    document.getElementById('txtjeniskelamin').value =""
    document.getElementById('txtumur').value =""
    document.getElementById('txtwarna').value =""

    mode ='tambah'

    tampilkanSiswa()
}

const cariIndex = (nama) => {
    // tampilkan index jika nama siswa === nama
    for (let i = 0; i < daftarSiswa.length; i++) {
        if (daftarSiswa[i].nama == nama) 
            return i
    } 
    return -1
}

const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus element dari dalam array
    if (indexDihapus !== -1) {
    daftarSiswa.splice(indexDihapus, 1)
    tampilkanSiswa()
    }
}

const editSiswa = (target) => {
    const indexEdit = cariIndex(target) 
    const siswaDiedit = daftarSiswa[indexEdit];

    const nama = document.getElementById('txtnama').value = target
    const jeniskelamin = document.getElementById('txtjeniskelamin').value = siswaDiedit.jeniskelamin
    const umur = document.getElementById('txtumur').value = siswaDiedit.umur
    const warna = document.getElementById('txtwarna').value = siswaDiedit.warna

    mode = indexEdit
}

const cancel = () => {
    const nama = document.getElementById('txtnama').value =""
    const jeniskelamin = document.getElementById('txtjeniskelamin').value =""
    const umur = document.getElementById('txtumur').value =""
    const warna = document.getElementById('txtwarna').value =""

    mode  = 'tambah'
}



    // console.log(target)
    // console.log(indexEdit)

    // console.log(daftarSiswa[indexEdit])

    



    // const namaBaru = prompt('Masukkan Nama')
    // const jeniskelaminBaru = prompt('Masukkan Jenis Kelamin')
    // const umurBaru = prompt('Masukkan Umur')
    // constwarnaBaru = prompt('Masukkan Warna Favorit')
    
    // daftarSiswa[indexEdit] = {
    //     nama: namaBaru,
    //     jenKel: jenKelBaru,
    //     umur: umurBaru,
    //     wfavorit: wfavoritBaru
    // }
