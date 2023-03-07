


function loadButtons(){
    time(Date.now());
    const parent = document.getElementById('buttons-container');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    let buttons = [];
    let num = Math.floor(Math.random() * 100);
    console.log(num);
    for(let i = 0; i < 100; i++) {
        let button = document.createElement('button');
        parent.appendChild(button);
        if(i == num){
            button.style.backgroundColor = "red";
            button.addEventListener("click", loadButtons);
        }
    }  
}
let rtime = [];
function time(theTime){
    rtime.push(theTime);
    console.log(rtime);
}
function calculateTimes(){
    //subtract [1] - [0], [2] - [1], etc
    
}