let wrap=document.getElementsByClassName('wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    for (const user of users) {
        let userId=user.id;
        let userdiv=document.createElement('div');
        userdiv.classList.add('userdiv');
        userdiv.innerText=`${user.id} - ${user.name}`;
        let button=document.createElement('button');

        button.innerText='details';
        button.addEventListener('click',function (){
            location.href=`http://localhost:63342/HTML-JS-2023/JS/mini-project/user-details.html?user_id=${userId}`

        })
userdiv.append(button)
        wrap.append(userdiv);
    }
});





