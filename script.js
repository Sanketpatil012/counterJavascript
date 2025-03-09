
// Get elements
let counter = document.getElementById('counter');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let clear = document.getElementById('clear');
let text = document.querySelector('.text');

// Function to update UI based on counter value
function updateUI(x) {
     if(x===0){
         text.innerHTML=  `<p class="para" style="color:brown ; font-size:20px ; margin:20px 20px ">Error : cannot go below 0 </p>`
         clear.style.display='none'
         decrement.disabled= true
        }else{
         text.innerHTML=""
         clear.style.display="inline-block"
         decrement.disabled= false
     }
}

// Increment button
increment.addEventListener('click', () => {
     let x= parseInt((counter.textContent) || 0)
     x=x+1
     counter.textContent=x
     updateUI(x)
});

// Decrement button
decrement.addEventListener('click', () => {
    let x= parseInt((counter.textContent) || 0)
    if(x > 0){
       x=x-1 
       counter.textContent=x
       updateUI(x)
     }
});

// Clear button
clear.addEventListener('click', () => {
     counter.innerHTML="0"
     updateUI(0)
});

// Initial UI setup
updateUI(parseInt(counter.textContent) || 0)