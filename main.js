let pound=document.getElementById("pound")
let dolar=document.getElementById("dolar")
let dirham = document.getElementById("dirham")

// dolar.onkeyup = function () {
//     pound.value=dolar.value * 15000
// }
// pound.onkeyup = function () {
//     dolar.value=pound.value /15000
// }
// dirham.onkeyup = function () {
//     pound.value=dirham.value * 4000
// }
// pound.onkeyup = function () {
//     dirham.value=pound.value /4000
// }
// dirham.onkeyup = function () {
//     dolar.value=dirham.value * 0.274
// }
// dolar.onkeyup = function () {
//     dirham.value=dolar.value / 0.274
// }


dolar.onkeyup = function () {
    pound.value = dolar.value * 14800
     dirham.value=dolar.value / 0.274
}
pound.onkeyup = function () {
    dirham.value = pound.value / 4000
     dolar.value=pound.value /14800
}
dirham.onkeyup = function () {
    dolar.value = dirham.value * 0.274
     pound.value=dirham.value * 4000
}