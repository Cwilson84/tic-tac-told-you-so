// index.js
$(document).ready(function () {
    let currentPlayer = "X"; // X is the default player
    let currentQuestionIndex = 0; // Index to keep track of the current question

    // Array of trivia questions
    const triviaQuestions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris"
        },
    ];

    // Add event listeners to each square
    $(".cell").on("click", function () {
        // Check if the cell is already marked
        if (!$(this).hasClass("marked")) {
            // Display the current trivia question and check the answer
            const currentQuestion = triviaQuestions[currentQuestionIndex];
            if (askQuestion(currentQuestion)) {
                // If the answer is correct, mark the cell with the current player's symbol
                $(this).addClass("marked").text(currentPlayer);

                // Switch to the next player
                currentPlayer = currentPlayer === "O" ? "X" : "O";

                // Move to the next question or reset to the first question if all questions are answered
                currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
            } else {
                alert("Incorrect, turn lost.");
                currentPlayer = currentPlayer === "O" ? "X" : "O";
            }
        }
    });

    // Ask a trivia question and return true if the answer is correct, false otherwise
    function askQuestion(questionObj) {
        // Logic to display and check the trivia question
        const userAnswer = prompt(`${questionObj.question}\n${questionObj.choices.join(", ")}\n`).toLowerCase();
        return userAnswer === questionObj.correctAnswer.toLowerCase();
    }
});
