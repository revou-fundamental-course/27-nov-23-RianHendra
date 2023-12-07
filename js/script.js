const nilaiAlas = document.getElementById('alas');
const nilaiTinggi = document.getElementById('tinggi');
const nilaiHasil = document.getElementById('hasil');
const submit = document.getElementById('submit');

function hitungLuas(alas, tinggi) {
    let luas = 1 / 2 * alas * tinggi;
    return luas;
}

submit.addEventListener('click', (e) => {

    let luasSegitiga = hitungLuas(nilaiAlas.value, nilaiTinggi.value)
    nilaiHasil.innerHTML = `
              Nilai Luas Segitiga adalah = ${luasSegitiga}  
            `;

    e.preventDefault();
})