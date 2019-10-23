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
  
  
  // Ambil objek makanan dengan harga di atas Rp15000 dengan menggunakan Array.filter
  const hasil = hargaMakanan.filter(harga =>harga.length > 15000);
  
  console.log(hasil);


// Temukan object dengan harga makanan Rp14000 dengan menggunakan Array.find

var harga = [24000, 17000, 14000, 17000, 4000,6000,9000,1000,3000,32000];

var found = harga.find(function(element) {
  return element < 17000;
});

// Temukan object dengan harga makanan Rp17000 dengan menggunakan Array.find


var harga = [24000, 17000, 14000, 17000, 4000,6000,9000,1000,3000,32000];

var found = harga.find(function(element) {
  return element < 24000;
});
console.log(found);


  // Ambil hanya harga dari index terakhir

var popped = Array.prototype.pop.call(hargaMakanan);

console.log(popped);


// Urutkan harga makanan dari yang paling murah ke paling mahal dengan menggunakan Array.sort

let harga = [2400,17000, 14000, 9000, 4000, 17000, 32000, 6000, 1000, 3000];
harga.sort((a, b) => a - b);
console.log(harga);