const nama = [
   "Devyn Ramirez",
    "Harmony Duncan",
   "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
   "Alfredo Faulkner"
]

const masaKerja = [
10,
5,
8,
7,
4,
10,
9,
8,
7,
10
]

const karyawanJunior = []
const karyawanSenior = []

function tampilkanGaji (){
    console.log(`Daftar Gaji:`)
for (let i = 0; i < nama.length; i++) {
    if (masaKerja[i] < 6){
        karyawanJunior.push(nama[i])
        console.log(`${i+1}. Karyawan ${nama[i]} mendapat gaji Rp 4.000.000`)
    } else {
        karyawanSenior.push(nama[i])
        console.log(`${i+1}. Karyawan ${nama[i]} mendapat gaji Rp 7.000.000`)
    }
}
}
tampilkanGaji()
tampilkanGaji()



function MenentukanJuniorDanSenior (){
    let karyawan = 1
console.log(`Daftar Karyawan Junior:`)
for (let nama of karyawanJunior) {
    console.log(`${karyawan}. ${nama}`)
    karyawan++
}
    console.log(`Daftar Karyawan Senior:`)
    for (let index in karyawanSenior) {
        console.log(`${parseInt(index)+1}. ${karyawanSenior[index]}`)
    }
}

MenentukanJuniorDanSenior()
MenentukanJuniorDanSenior()