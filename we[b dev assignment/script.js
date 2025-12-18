// JavaScript Console Quiz Game - New Trivia Questions
const quizQuestions = [
    {
        question: "What is the capital of Australia?",
        answer: "canberra"
    },
    {
        question: "Who invented the telephone?",
        answer: "alexander graham bell"
    },
    {
        question: "Which is the longest river in the world?",
        answer: "nile"
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "au"
    },
    {
        question: "What does DNA stand for?",
        answer: "deoxyribonucleic acid"
    }
];

let score = 0;
let totalQuestions = quizQuestions.length;

for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = prompt(`Question ${i + 1}/${totalQuestions}: ${quizQuestions[i].question}`);
    
    if (userAnswer) {
        const cleanAnswer = userAnswer.toLowerCase().trim();
        const correctAnswer = quizQuestions[i].answer;
        
        if (cleanAnswer === correctAnswer) {
            score++;
            alert("✅ Correct! Well done!");
        } else {
            alert(`❌ Incorrect. The correct answer was: "${correctAnswer}"`);
        }
    } else {
        alert("❌ Skipped question. Moving on...");
    }
}

// Final Score Display
const percentage = Math.round((score / totalQuestions) * 100);
alert(`Quiz Complete!\nYour score: ${score}/${totalQuestions} (${percentage}%)\n${percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good job!" : "📚 Keep practicing!"}`);