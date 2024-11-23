/* global document */

var resim = document.querySelector('img');

resim.onclick=function(){
    var myImages = resim.getAttribute('src');
    if(myImages==='images/Screenshot 2024-08-14 222039.png'){
        resim.setAttribute('src','images/Screenshot 2024-08-15 194440.png');
    }
    else{ resim.setAttribute('src','images/screenshot 2024-08-14 222039.png');

    }
}