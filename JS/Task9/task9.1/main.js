// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let a=document.getElementById('main_header');
a.classList.add('mar-2021');
console.log(a.classList);
// b) робить шириниу елементу ul 400px
let b = document.getElementsByTagName('ul');
for (const bElement of b) {
    bElement.style.width='400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let c = document.getElementsByClassName('linkList');
for (const cElement of c) {
    cElement.style.width='50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let d = document.getElementsByClassName('listElement2');
for (const dElement of d) {
    console.log(dElement.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let e = document.getElementsByTagName('li');
for (const eElement of e) {
    eElement.style.background='silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let f=document.getElementsByTagName('a');
for (const fElement of f) {
    fElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let g =document.getElementsByTagName('a');
for (const gElement of g) {
    if (gElement.innerText==='link3'){
        gElement.style.fontSize='40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let h=document.getElementsByTagName('a');
for (const hElement of h) {
    XXX=hElement.innerText;
    hElement.classList.add(`${XXX}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let i=document.getElementsByClassName('sub-header');
for (const iElement of i) {
    const color=prompt('Enter color');
    iElement.style.background=color;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let j =document.getElementsByClassName('sub-header');
for (const jElement of j) {
    if (jElement.innerText==='content 2 segment'){
        let cdcd=prompt('');
        jElement.style.color=cdcd;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let k =document.getElementsByClassName('content_1');
for (const kElement of k) {
    let dcdc=prompt();
    kElement.innerText=(`${dcdc}`);
}
// l) отримати елементи p та змінити їм padding на 20px
let l=document.getElementsByTagName('p');
for (const lElement of l) {
    lElement.style.padding='20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let m=document.getElementsByClassName('text2');
for (const mElement of m) {
    mElement.innerText='mar-2022';
}