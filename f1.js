
function addingEventListener() {
    const input = document.getElementById('input');
    

    function clickAlert() {
  alert(`These drivers are legends, but numbers don't tell the whole story! Follow the links below and read about the men behind the visor, and what made them truly special.`);
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


