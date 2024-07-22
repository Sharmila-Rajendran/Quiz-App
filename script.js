function Incorrect1(){
    document.querySelector("#optionlist1").style.backgroundColor='red';
    document.querySelector("#Answer1").style.backgroundColor='red';
}

function Incorrect2(){
    document.querySelector("#optionlist2").style.backgroundColor='red';
    document.querySelector("#Answer2").style.backgroundColor='red';
}

function Incorrect3(){
    document.querySelector("#optionlist3").style.backgroundColor='red';
    document.querySelector("#Answer3").style.backgroundColor='red';
}

function Correct(){
    document.querySelector(".opt1").style.backgroundColor='green';
    document.querySelector(".opt1").style.color='white';
    document.querySelector(".ans1").style.backgroundColor='green';
    document.querySelector(".ans1").style.color='white';
}

function reset(){
    const buttons = document.querySelectorAll('.opt, .ans, .opt1, .ans1');
    buttons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
}

function isOptionSelected() {
    const options = document.querySelectorAll('.opt, .ans, .opt1, .ans1');
    for (let i = 0; i < options.length; i++) {
        if (options[i].style.backgroundColor === 'red' || options[i].style.backgroundColor === 'green') {
            return true;
        }
    }
    return false;
}

function submit() {
    if (isOptionSelected()) {
        alert("Congrats! You have completed the quiz!");
    } else {
        alert("Please select an option before submitting.");
    }
}