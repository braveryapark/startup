
function randomInteger() {
    return Math.floor(Math.random()*(255 + 1));
}
function randomRgbColor() {
    let r = randomInteger();
    let g = randomInteger();
    let b = randomInteger();
    return [r,g,b];
}
function loadButtons(){
    time(Date.now());
    const parent = document.getElementById('buttons-container');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    let buttons = [];
    let num = Math.floor(Math.random() * 100);
    for(let i = 0; i < 100; i++) {
        let button = document.createElement('button');
        if(i != num){
            button.style.backgroundColor = "white";
            button.addEventListener("click", wrong);
        }
        parent.appendChild(button);
        if(i == num){
            button.style.backgroundColor = "rgb(" + randomRgbColor() + ")";
            button.addEventListener("click", loadButtons);
        }
    }  
}
let rtime = [];
function start(){
    rtime = [];
    loadButtons();
}
function time(theTime){
    rtime.push(theTime);
}
function calculateTimes(){
    const parent = document.getElementById('buttons-container');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    console.log(rtime);
    let differences = [];
    //subtract [1] - [0], [2] - [1], etc
    for(i = 0; i < rtime.length - 1; i++){
        differences.push(rtime[i+1] - rtime[i]);
    }
    let total = 0;
    for(j = 0; j < differences.length; j++){
        total += differences[j];
    }
    let avg = total/differences.length;
    console.log(avg);
    let score = document.createElement('h2');
    score.textContent = "Average Reflex Time: " + avg + "ms";
    parent.appendChild(score);
    let level = document.createElement('h3');
    if(avg <= 600){
        level.textContent = "Ur insane.";
        parent.appendChild(level);
    }
    else if(avg <= 750){
        level.textContent = "Super Fast reflexes!";
        parent.appendChild(level);
    }
    else if(avg <= 1000){
        level.textContent = "You're pretty fast!";
        parent.appendChild(level);
    }
    else if(avg <=1500){
        level.textContent = "Not bad... could be better...";
        parent.appendChild(level);
    }
    else if(avg <= 2000){
        level.textContent = "Let's do some more practicing...";
        parent.appendChild(level);
    }
    else if(avg < 2000){
        level.textContent = "Yikes...";
        parent.appendChild(level);
    }
    else{
        level.textContent = "You were supposed to click a button below.";
        parent.appendChild(level);
    }
}
function wrong(){
    const parent = document.getElementById('buttons-container');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    let score = document.createElement('h2');
    score.textContent = "You clicked a wrong button: You lose :(";
        parent.appendChild(score);
}