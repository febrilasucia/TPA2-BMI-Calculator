var hei, wei, ket, bmi;
function hitung() {
    wei = parseFloat(document.getElementById("wei").value);
    hei = parseFloat(document.getElementById("hei").value);
    hei /= 100;
    bmi = wei / (hei * hei);

    if (bmi > 30) {
        ket = "Obesity";
    } else if ((bmi >= 25) & (bmi <= 29.9)) {
        ket = "Overweight";
    } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
        ket = "Normal Weight";
    } else {
        ket = "UnderWeight";
    }

    document.getElementById("bmi").innerHTML = " " + bmi.toFixed(1);
    document.getElementById("ket").innerHTML = " " + ket;

}
