var A1 = document.getElementById ("A1");
var A2 = document.getElementById ("A2");
var Result = document.getElementById ("Result");

function tambah() {
    Result.value = Number(A1.value) + Number(A2.value);
}

function kurang() {
    Result.value = Number(A1.value) - Number(A2.value);
}

function bagi() {
    Result.value = Number(A1.value) / Number(A2.value);
}

function kali() {
    Result.value = Number(A1.value) * Number(A2.value);
}