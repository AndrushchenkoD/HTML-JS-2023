// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let Divka =document.createElement('div');
// Divka.setAttribute('id','text');
// Divka.style.width='200px';
// Divka.style.height='200px';
// Divka.style.border='solid 1px red';
//
// let btn=document.createElement('button');
// btn.style.width='100px';
// btn.style.height='20px';
// btn.style.border='solid 1px red';
//
// document.body.append(btn,Divka);
// btn.addEventListener('click',function (e) {
//     Divka.style.display='none';
// })
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input=document.createElement('input');
// input.setAttribute('name','age');
//
// let btn=document.createElement('button');
// btn.style.width='100px';
// btn.style.height='20px';
// btn.style.border='solid 1px red';
//
// document.body.append(input,btn);
//
// btn.addEventListener('click',function (e) {
//         let divka=document.createElement('div');
//         divka.style.width='200px';
//         divka.style.height='200px';
//         divka.style.border='solid 1px red';
//         document.body.append(divka);
//         if (input.value<'18'){
//             divka.innerText=`you so young`;
//         }else{
//             divka.innerText=`You are welcome!`
//         }
// })
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const btn=document.getElementById('btn');
// btn.addEventListener('click',function (){
//     console.log(document.forms.formOne.InputOne.value);
//     console.log(document.forms.formOne.InputTwo.value);
//     console.log(document.forms.formTwo.InputThree.value);
//     console.log(document.forms.formTwo.InputFour.value);
//
// })
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// const inputOne=document.createElement('input');
// const inputTwo=document.createElement('input');
// const inputThree=document.createElement('input');
// const btn=document.createElement('button');
// btn.innerText='Click';
// document.body.append(inputOne,inputTwo,inputThree,btn,br);
//
// btn.addEventListener('click',function(){
//
//     const tr=inputOne.value;
//     const ts=inputTwo.value;
//     const tt=inputThree.value;
//
//     function creatorTable(tr,ts,tt){
//         const table=document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             table.append(tr);
//             for (let j = 0; j < ts; j++) {
//                 const ts = document.createElement('ts');
//                 ts.innerText=`${tt}`;
//                 ts.style.border='solid 1px red';
//                 tr.append(ts);
//             }
//         }
//
//     }
//     creatorTable(tr,ts,tt);
// })

