// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let btn=document.getElementById('btn');
//
// let {name,age}=document.forms.formOne;
// let key='key';
//
// let saveFn =(name,age)=>{
//     let obj={
//         name,
//         age
//     }
//     localStorage.setItem(key,JSON.stringify(obj));
// };
// btn.addEventListener('click',function () {
//     saveFn(name.value,age.value);
// })
//
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function (){
//     localStorage.setItem('name',JSON.stringify(document.forms.formOne.name.value));
//     localStorage.setItem('age',JSON.stringify(document.forms.formOne.age.value));
// })

let carBtn=document.getElementById('carBtn');
let [model,type,volume]=document.forms.carForm;
let carkey='carkey';

let save=(model,type,volume)=>{
    let Cararray=[
        model,
        type,
        volume
    ]
    localStorage.setItem(carkey,JSON.stringify(Cararray));
};
carBtn.addEventListener('click',function () {
    save(model.value,type.value,volume.value);
})

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.