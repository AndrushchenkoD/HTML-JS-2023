// - Є масив:
//const array=['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.




// for (const arrayElement of array) {
//     let ul=document.getElementsByClassName('menu')[0];
//     let liE=document.createElement('li');
//     liE.innerText=`${arrayElement}`;
//     ul.append(liE)
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divBlock=document.createElement('div');
//     divBlock.innerHTML=`<h2>${coursesAndDurationArrayElement.title}</h2></br>
// ${coursesAndDurationArrayElement.monthDuration}</br>
// <hr>
// `
//     document.body.append(divBlock);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divI=document.createElement('div');
//     divI.classList.add('item');
//     document.body.append(divI);
//     let h1H=document.createElement('h1');
//     h1H.classList.add('heading');
//     h1H.innerText=`${coursesAndDurationArrayElement.title}`;
//     let pD=document.createElement('p');
//     pD.classList.add('description');
//     pD.innerText=`${coursesAndDurationArrayElement.monthDuration}`
//     divI.append(h1H,pD);
// }