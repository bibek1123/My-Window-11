let taskbar = document.getElementsByClassName('taskbar')[0];
let startmenu = document.getElementsByClassName('startmenu')[0];

taskbar.addEventListener('click',()=>{
    if(startmenu.style.bottom == '-43rem'){
        startmenu.style.bottom = '3rem'
    }
    else{
        startmenu.style.bottom = '-43rem'
    }
})

