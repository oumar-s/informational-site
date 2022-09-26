"use strict";

function changeTheme() {
    let color = document.body.style.color;


    if(color === 'black'){
        document.body.style.color = 'navy';       
    } else{
        document.body.style.color = 'black';         
    }
}