let count = 0;
let adicionar = document.getElementById('adicionar');
let subtrair = document.getElementById('subtrair')
const currentNumber = document.getElementById('currentNumber');


function decrement(){
   count--;
   currentNumber.innerHTML = count
   if(count < 0){
      document.querySelector('h1').style.color = 'red';
      document.querySelector('p').style.color = 'red';
   }
}

function increment(){
   count++;
   currentNumber.innerHTML = count;
   if(count >= 0){
      document.querySelector('h1').style.color = 'black';
      document.querySelector('p').style.color = 'black';
      
   }
}
subtrair.addEventListener('click', decrement);
adicionar.addEventListener('click', increment);