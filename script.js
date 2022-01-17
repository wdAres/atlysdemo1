window.onscroll = (event) => {
   let bar = document.getElementById('drops');
    
//    
if (window.scrollY>3200) {
    bar.classList.remove('drops-class');
}
else{
    bar.classList.add('drops-class');
}
};

