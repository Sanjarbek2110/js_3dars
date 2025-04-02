// let maxSon = 180;
// let bal = +prompt("Ishlagan balingizni kiriting!");

// if(bal >= 0){
//     alert("Iltimos balni kiriting");
// }
// else if(bal < 0){
//     alert("O'qishga kirdingiz");
// }
// else{
//     alert("O'qishga kirmadinggiz");
// }
// console.log(bal);


let son = +prompt("1-vazifa: Iltimos son kiriting!");

if(son % 2 == 0){
    alert("Juft son")
}else if(isNaN(son) || son == 0){
    alert("Iltimos raqam kiriting yoki 0 dan katta son yozing!");
}
else{
    alert("Toq son")
}

let son1 = +prompt("2-vazifa: Iltimos son kiriting!");
let son2 = +prompt("Iltimos yana 1ta son kiriting!");

let amal = prompt("Biron amalni kiriting (+, -, /,*)")

if(amal == "+"){
    let Natija = son1 + son2;
    alert("Chiqgan Natija: " + Natija)
}

else if(amal === "-"){
    let Natija1 = son1 - son2;
    alert("Chiqgan Natija: " + Natija1)
}

else if(amal === "*"){
    let Natija2 = son1 * son2;
    alert("Chiqgan Natija: " + Natija2)
}

else if(amal === "/"){
    let Natija3 = son1 / son2;
    alert("Chiqgan Natija: " + Natija3)
}

else{
    alert("Iltimos amalni (+, -, *, /) kiriting!")
}

let son3 = +prompt("3-vazifa: Iltimos sizda necha dollar borligini kiriting meni uni so'mda qancha bolishini chiqarib beraman!");
let som = 13;

if(son3 !== som){
    alert("Sizda " + son3 + " dollar bor, bu " + son3 * som + ".000 so'mga teng!");
}
else if(son3 <= 0){
    alert("Iltimos 0 dan katta son kiriting!");
}