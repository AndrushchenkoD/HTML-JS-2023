// Все робити за допомоги js.
// - створити блок,
const div=document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap','collapse','alpha','beta');
div.innerText='fight';
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background='red';
div.style.color="blue";
div.style.fontSize='20px';
// - додати цей блок в body.
document.body.append(div);
// - клонувати його повністю, та додати клон в body.
const divclone=div.cloneNode(true);
document.body.appendChild(divclone);


