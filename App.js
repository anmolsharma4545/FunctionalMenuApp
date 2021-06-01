const allContentBtn = document.querySelector('#all');
const breakfastBtn = document.querySelector('#breakfast');
const lunchBtn = document.querySelector('#lunch');
const dinnerBtn = document.querySelector('#dinner');
const items = document.querySelectorAll('.item');

for(let i = 0; i<items.length;i++){
   const item = items[i];
   console.log(item);
   breakfastBtn.addEventListener('click', () =>{
       item.classList.remove('show')
       item.classList.remove('hide')
       if(item.classList.contains('breakfast')){
       item.classList.toggle('show')
    }else{
        item.classList.toggle('hide')
    }
});
lunchBtn.addEventListener('click', () =>{
    item.classList.remove('show')
    item.classList.remove('hide')
    if(item.classList.contains('lunch')){
    item.classList.toggle('show')
 }else{
    item.classList.toggle('hide')
}
});
dinnerBtn.addEventListener('click', () =>{
    item.classList.remove('show')
    item.classList.remove('hide')
    if(item.classList.contains('dinner')){
    item.classList.toggle('show')
 }else{
    item.classList.toggle('hide')
}
});
allContentBtn.addEventListener('click', () =>{
    item.classList.remove('hide')
    item.classList.add('show');
});
}
 
