


var themes = {
    theme1: {
    bgColor: "#3a3535",
    fColor: "#f4f4f4"},
    theme2: {
    bgColor: "#ff7315",
    fColor: "#f4f4f4"},
    theme3: {
    bgColor: "#fc4445",
    fColor: "#000"},       
};
var themePicker = "theme"+Math.floor((Math.random() * 3) + 1);
var root = document.querySelector(":root");
root.style.setProperty('--primaryColor',themes[themePicker]['bgColor'])
root.style.setProperty('--moreColor',themes[themePicker]['fColor'])
// $(':root').css('--primaryColor',themes[themePicker]['bgColor']);
// $(':root').css('--moreColor',themes[themePicker]['fColor']);

var cursor = document.querySelector('.cursor');

document.addEventListener("mousemove",e =>{
    cursor.setAttribute("style","top:"+ (e.pageY - 6) + "px; left: " + (e.pageX - 6) + "px;");
});

document.addEventListener('click',f =>{
    cursor.classList.add('expand');
    

    setTimeout(() =>{
        cursor.classList.remove('expand');
    },800);
});