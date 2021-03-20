
function addingEventListener() {
    const input = document.getElementById('input');
    

    function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert); 

}

addingEventListener();


function changeBackground(event) {
console.log(event.target);
    event.target.style.background = "yellow"
    
}

function backToNormal(event) {

    event.target.style.background = ""
    
}


