let vector = document.querySelectorAll('.equalize');



vector.forEach(function(item){
   item.addEventListener('click', function(){
       if(item.style.backgroundImage != `url("img/Vector2.png")`){
           item.style.backgroundImage = `url("img/Vector2.png")`;
       } else {
           item.style.backgroundImage = `url("img/Vector.png")`;
       }
   }); 
});


let muinus = document.querySelectorAll('.muinus');
let res = document.querySelectorAll('.res');
let add = document.querySelectorAll('.add');
let i = [1,1,1];


add.forEach(function(item, index){
    item.addEventListener('click', function(){
       i[index]++;
        res[index].innerHTML = i[index];
        console.log(i)
   }); 
});

muinus.forEach(function(item, index){
    item.addEventListener('click', function(){
        if(i[index] !=1){
           i[index]--; 
            res[index].innerHTML = i[index];
        }
        console.log(i)
   }); 
});

let btn = document.querySelectorAll('button');

btn.forEach(function(item, index){
    item.addEventListener('click', function(){
      item.style.opacity = `0.7`;
   }); 
});


let img = document.querySelectorAll('img');
let imgSrc = [['img/1.png','img/2.png','img/3.png'],['img/1-1.png','img/2-2.png','img/3-3.png']]

img.forEach(function(item, index){
    item.addEventListener('mouseenter', function(){
      item.src = imgSrc[1][index];
   }); 
    item.addEventListener('mouseleave', function(){
      item.src = imgSrc[0][index];
   }); 
});





let selectHeader = document.querySelectorAll('.select-header');
let selectItem = document.querySelectorAll('.select-item');



function toggle(){
    this.parentElement.classList.toggle('is-active');
}

selectHeader.forEach(item =>{
   item.addEventListener('click', toggle); 
});


function choose(){
    let text = this.innerText;
    let select = this.closest('.select');
    let currentText = select.querySelector('.select-current');
    
    select.classList.remove('is-active');
    
    currentText.innerText = text; 
}


selectItem.forEach(item =>{
   item.addEventListener('click', choose); 
});


let selectBody = document.querySelectorAll('.select');


selectBody.forEach(item =>{
    item.addEventListener('mouseleave', function(){
        // let select = this.closest('.select');
        item.classList.remove('is-active');
    }); 
});
