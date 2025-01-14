let rand;

function play(){
    let start = parseInt(document.querySelector("#start").value);
    let end = parseInt(document.querySelector("#end").value);
    rand = Math.floor(Math.random()*(end-start+1))+start;
    document.querySelector('#st').innerHTML = start;
    document.querySelector('#en').innerHTML = end;
}


function check(){
    let attempt = parseInt(document.querySelector("#guess").value);
    let result = document.querySelector("#res");
    if(attempt == rand){
        result.innerHTML = "Your Guess was correct!!!";
    }else if(attempt < rand){
        result.innerHTML = "Your Guess was worng,the number is bigger!!!";
    }else{
        result.innerHTML = "Your Guess was wrong,the number is smaller!!!";
    }
}