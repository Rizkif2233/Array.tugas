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

  var firstElement = makanan.shift();
  
  console.log(makanan);
  console.log(firstElement);

// Ambil nilai index ke-4 dari array tersebut

// ????????


  // Ambil nilai terakhir dari array tersebut

console.log(makanan.pop());

// Ambil index dari "Mie Goreng" dari array tersebut dengan menggunakan Array.indexOf

console.log(makanan.indexOf('Mie Goreng'));

// Urutkan nama makanan dengan urutan dari A hingga Z

makanan.sort(function(a, b) {
  return a - b;
});
console.log(makanan);

