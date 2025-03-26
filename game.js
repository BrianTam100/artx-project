function goToMitosis(){
    window.location.href = "mitosis.html";
}

function goToMeiosis(){
    window.location.href = "meiosis.html";
}

function launchInterphase(){
    window.location.href = "interphase.html"
}

function completeProphase() {
    const selectedOption = document.querySelector('input[name="alignment"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    if (selectedOption.value === "A") {
        alert("Great! You've aligned the chromosomes in Prophase.");
        
        document.getElementById("align-chromosomes").style.display = "none";
        
        document.getElementById("completed").style.display = "block";
        
    } else {
        alert("Oops, try again! The chromosomes align in the middle of the cell during Prophase.");
    }
}

function proceedToMutation() {
    window.location.href = "mutation.html";  // Redirect to Metaphase page
}


function checkAnswers() {
    const answer1 = document.querySelector('input[name="mutation1"]:checked');
    const answer2 = document.querySelector('input[name="mutation2"]:checked');

    if (!answer1 || !answer2) {
        alert("Please answer both questions before proceeding.");
        return;
    }

    const correctAnswer1 = answer1.value === "B"; 
    const correctAnswer2 = answer2.value === "B"; 

    if (correctAnswer1 && correctAnswer2) {
        document.getElementById("mutationForm1").style.display = "none";
        document.getElementById("mutationForm2").style.display = "none";
        document.getElementById("mutationCompleted").style.display = "block";
    } else {
        alert("Oops, try again! Make sure both answers are correct.");
    }
}

function proceedToNextStage() {
    window.location.href = "metaphase.html";
}

function checkAnswers2() {
    const answer1 = document.querySelector('input[name="metaphase"]:checked');
    const answer2 = document.querySelector('input[name="spindle"]:checked');
    
    if (!answer1 || !answer2) {
        alert("Please answer both questions before proceeding.");
        return;
    }

    const correctAnswer1 = answer1.value === "A"; 
    const correctAnswer2 = answer2.value === "A"; 

    if (correctAnswer1 && correctAnswer2) {
        document.getElementById("questionForm1").style.display = "none";
        document.getElementById("questionForm2").style.display = "none";
        document.getElementById("metaphaseCompleted").style.display = "block";
        window.location.href = "anaphase.html";
    } else {
        alert("Oops, try again! Make sure both answers are correct.");
    }
}

function proceedToAnaphase() {
    window.location.href = "anaphase.html"; 
}