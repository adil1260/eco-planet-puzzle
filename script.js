document.getElementById('start-btn').addEventListener('click', function() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.quiz-screen').style.display = 'block';
    loadQuestion(0); // İlk soruyu yükle
    document.querySelector('#background-music').play(); // Müzik çalsın
});

const questions = [
    {
        question: "What is an ecosystem?",
        options: [
            "A community of living organisms interacting with each other and their environment",
            "A type of plant",
            "A kind of animal",
            "A type of rock"
        ],
        correctAnswer: 0
    },
    {
        question: "What is biodiversity?",
        options: [
            "The variety of life in the world or in a particular habitat",
            "The amount of oxygen in the air",
            "The study of plants",
            "The climate of a region"
        ],
        correctAnswer: 0
    },
    // Buraya daha fazla soru ekleyebilirsiniz
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(index) {
    if (index < questions.length) {
        const question = questions[index];
        document.querySelector('.quiz-screen h2').textContent = question.question;
        const options = document.querySelectorAll('.option');
        
        options.forEach((button, i) => {
            button.textContent = question.options[i];
            button.onclick = () => checkAnswer(i, index);
        });
    }
}

function checkAnswer(selectedIndex, questionIndex) {
    const correctAnswer = questions[questionIndex].correctAnswer;

    if (selectedIndex === correctAnswer) {
        score++;
        playSound('correct-sound');
        showFeedback(true);
    } else {
        playSound('incorrect-sound');
        showFeedback(false);
    }

    // Sonraki soruya geçiş
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => loadQuestion(currentQuestionIndex), 1500); // Geçiş için animasyon zamanı
    } else {
        setTimeout(showResults, 1500); // Sonuçlar gösterilsin
    }
}

function showFeedback(isCorrect) {
    const feedback = isCorrect ? "Correct! Great job!" : "Oops! That's not correct.";
    alert(feedback);
}

function showResults() {
    document.querySelector('.quiz-screen').style.display = 'none';
    document.querySelector('.result-screen').style.display = 'block';

    document.getElementById('score').textContent = `Your final score is: ${score}`;
    let feedback = "";

    if (score === questions.length) {
        feedback = "Excellent! You've mastered the puzzle!";
    } else if (score >= questions.length / 2) {
        feedback = "Good job, but you can do even better!";
    } else {
        feedback = "Keep practicing, you can improve!";
    }

    document.getElementById('feedback').textContent = feedback;
}

document.getElementById('restart-btn').addEventListener('click', function() {
    score = 0;
    currentQuestionIndex = 0;
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'block';
});

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
}