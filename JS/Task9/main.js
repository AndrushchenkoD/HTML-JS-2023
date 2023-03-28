// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let p_content=document.getElementById('content');
let txt=p_content.innerText;
console.log(txt);
// -- отримує текст з блоку з id "rules"
let d_content=document.getElementById('rules');
let content=d_content.innerText;
console.log(content);

// -- замініть текст параграфа з id 'content' на будь-який інший

let x=document.getElementById('content');
x.innerText='lorem spspsps';

// -- замініть текст параграфа з id 'rules' на будь-який інший

let y =document.getElementById('rules');
y.innerText='aaaaaabuuuu';

// -- змініть кожному елементу колір фону на червоний
let z= document.body.children;
for (const zElement of z) {
    zElement.style.background='red'
}
// -- змініть кожному елементу колір тексту на синій
for (const zElement of z) {
    zElement.style.color='blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let idR= document.getElementById('rules');
console.log(idR.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcR=document.getElementsByClassName('fc_rules');
for (const fcRElement of fcR) {
    fcRElement.style.color='red';
    fcRElement.style.background='blue';

}
//
//

