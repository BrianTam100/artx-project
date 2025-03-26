function goToMitosis(){
    window.location.href = "mitosis.html";
}

function goToMeiosis(){
    window.location.href = "meiosis.html";
}

function launchInterphase(){
    window.location.href = "interphase.html"
}

// Game Logic

        // Function to handle G1 phase completion
        function completeG1() {
            const answer = document.getElementById("g1Answer").value.trim().toLowerCase();
            if (answer === "proteins" || answer === "protein") {
                alert("Great! You have passed the G1 phase.");
                document.getElementById("g1").style.display = "none";
                document.getElementById("s-phase").style.display = "block";
            } else {
                alert("Incorrect! Try again.");
            }
        }

        // Function to handle S phase completion
        function completeS() {
            const answer = document.getElementById("sAnswer").value.trim().toLowerCase();
            if (answer === "dna") {
                alert("DNA replication is completed!");
                document.getElementById("s-phase").style.display = "none";
                document.getElementById("g2-phase").style.display = "block";
            } else {
                alert("Incorrect! Try again.");
            }
        }

        // Function to handle G2 phase completion
        function completeG2() {
            const answer = document.getElementById("g2Answer").value.trim().toLowerCase();
            if (answer === "organelles") {
                alert("The cell is ready to advance to prophase.");
                document.getElementById("g2-phase").style.display = "none";
                document.getElementById("proceed").style.display = "block";
            } else {
                alert("Incorrect! Try again.");
            }
        }

        // Function to proceed to Prophase
        function proceedToProphase() {
            window.location.href = "prophase.html";  // Redirect to Prophase page
        }
function completeProphase() {
    // Get the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="alignment"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    // Check if the selected answer is correct (answer "A" is correct in this case)
    if (selectedOption.value === "A") {
        alert("Great! You've aligned the chromosomes in Prophase.");
        
        // Hide the current Prophase task
        document.getElementById("align-chromosomes").style.display = "none";
        
        // Show the "Completed" section
        document.getElementById("completed").style.display = "block";
        
    } else {
        alert("Oops, try again! The chromosomes align in the middle of the cell during Prophase.");
    }
}

// Function to proceed to the next stage (Metaphase)
function proceedToMutation() {
    // Redirect to the Metaphase page (this could be another HTML page)
    window.location.href = "mutation.html";  // Redirect to Metaphase page
}