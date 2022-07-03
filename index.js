(function(){
let screen = document.querySelector('.screen') 
let buttons = document.querySelectorAll('.btn') 
let clear = document.querySelector('.btn-clear') 
let equal = document.querySelector('.btn-equal') 
let dark = document.getElementById('dark')
let light=document.getElementById('light')


buttons.forEach(function(button){
button.addEventListener('click',function(e){
    let value=e.target.dataset.num;
    screen.value += value;
})

});

equal.addEventListener('click',function(e){
if(screen.value === ""){
screen.value = "Please Enter";
console.log('please enter')
}else{
   let anwser = eval(screen.value)
    screen.value = anwser;
}

})

clear.addEventListener('click',function(e){
    screen.value = "";


})

light.addEventListener('click',function(e){

    var cal = document.getElementById("calculator");
    var scr=document.getElementById("screen")
    cal.classList.add("calculator-ligth");
    scr.classList.add("screen-light")
})


dark.addEventListener('click',function(e){

    var cal = document.getElementById("calculator");
    var scr=document.getElementById("screen")
    cal.classList.remove("calculator-ligth");
    scr.classList.remove("screen-light")
})

})();