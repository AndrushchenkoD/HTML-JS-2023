// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const Element of value) {
//             let divPost= document.createElement('div');
//             divPost.classList.add('post');
//             for (const elementkey in Element) {
//                 let keyblock=document.createElement('div');
//                 keyblock.innerText=`${elementkey}-${Element[elementkey]}`;
//                 divPost.append(keyblock);
//             }document.body.append(divPost);
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(value => value.json())
// .then(value => {
//     for (const Element of value) {
//         let divCom=document.createElement('div');
//         divCom.classList.add('comment');
//         divCom.style.marginBottom='20px';
//         for (const ElementKey in Element) {
//             let divKey=document.createElement('div');
//             divKey.innerText=`${ElementKey}-${Element[ElementKey]}`;
//             divCom.append(divKey);
//         }document.body.append(divCom);
//     }
// })