/**
*
* Soal 1
*
*/

const makanan = [
  'Sate dan Nasi', 
  'Nasi Goreng', 
  'Mie Rebus', 
  'Nasi Bakar', 
  'Tempe Goreng', 
  'Mie Goreng', 
  'Ikan Bakar', 
  'Nasi Uduk', 
  'Kerupuk', 
  'Lalapan',
]

// Ambil nilai pertama dari array tersebut

// console.log(makanan[0])

// Ambil nilai index ke-4 dari array tersebut

// console.log(makanan[4])

// Ambil nilai terakhir dari array tersebut

// console.log(makanan[10-1])

// Ambil nilai "Mie Rebus" dari array tersebut

// console.log(makanan[2])

// Ambil index dari "Mie Goreng" dari array tersebut dengan menggunakan Array.indexOf

// console.log(makanan.indexOf('Mie Goreng'));

// Urutkan nama makanan dengan urutan dari A hingga Z

// console.log(makanan.sort())

/**
*
* Soal 2
*
*/

const hargaMakanan = [
  { nama: 'Sate', harga: 24000 },
  { nama: 'Nasi Goreng', harga: 17000 },
  { nama: 'Mie Rebus', harga: 14000 },
  { nama: 'Nasi Bakar', harga: 9000 },
  { nama: 'Tempe Goreng', harga: 4000 },
  { nama: 'Mie Goreng', harga: 17000 },
  { nama: 'Ikan Bakar', harga: 32000 },
  { nama: 'Nasi Uduk', harga: 6000 },
  { nama: 'Kerupuk', harga: 1000 },
  { nama: 'Lalapan', harga: 3000 },
]

// Ambil hanya harga dari index ke-4

// console.log(hargaMakanan[4])

// Ambil hanya harga dari index terakhir

// console.log(hargaMakanan('harga'))

// Ambil objek makanan dengan harga di atas Rp15000 dengan menggunakan Array.filter

// const result = hargaMakanan.filter(price => price.harga > 15000);

// console.log(result);

// Ambil objek makanan dengan harga di bawah Rp15000 dengan menggunakan Array.filter

// const result = hargaMakanan.filter(price => price.harga < 15000);

// console.log(result);

// Ambil objek makanan dengan harga diantara Rp10000 dan Rp Rp25000 dengan menggunakan Array.filter

// const result = hargaMakanan.filter(price => price.harga >=10000,25000);

// console.log(result);

// Urutkan harga makanan dari yang paling murah ke paling mahal dengan menggunakan Array.sort

// const hasil = hargaMakanan.sort((a,b) => a.harga - b.harga);

// console.log(hasil)

// Urutkan harga makanan dari yang paling mahal ke paling murah dengan menggunakan Array.sort

// const hasil = hargaMakanan.sort((a,b) => b.harga - a.harga);

// console.log(hasil)

// Temukan object dengan harga makanan Rp14000 dengan menggunakan Array.find

// const tampil = hargaMakanan.find(cari => cari.harga  === 14000)
                                 
// console.log(tampil)

// Temukan object dengan harga makanan Rp17000 dengan menggunakan Array.find

// const tampil = hargaMakanan.find(cari => cari.harga  === 17000)
                                 
// console.log(tampil)

// Temukan object dengan harga makanan Rp17000 dengan menggunakan Array.filter

// const tampil = hargaMakanan.filter(cari => cari.harga  === 17000)
                                 
// console.log(tampil)

// Temukan object dengan nama makanan mengandung kata "Goreng" dengan menggunakan Array.filter

// const filteritem = hargaMakanan.filter(kata => kata.nama.includes ("Goreng"))
                                 
// console.log(filteritem)

// Temukan object dengan nama makanan diawali dengan kata "Nasi" dengan menggunakan Array.filter

// const filteritem = hargaMakanan.filter(kata => kata.nama.includes ("Nasi"))
                                 
// console.log(filteritem)
// Temukan object dengan nama makanan diakhiri dengan kata "Bakar" dengan menggunakan Array.filter


// const filteritem = hargaMakanan.filter(kata => kata.nama.includes ("Bakar"))
                                 
// console.log(filteritem)

