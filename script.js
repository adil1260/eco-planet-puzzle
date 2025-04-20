const quizContainer = document.getElementById('quiz-container');
const startScreen = document.getElementById('start-screen');
const progressBar = document.getElementById('progress');
const popup = document.getElementById('popup');
const animal = document.getElementById('animal-animation');
const bgMusic = document.getElementById('background-music');
const clickSound = document.getElementById('sound-effect');
const animalSound = document.getElementById('animal-sound');
const background = document.getElementById('background');

let currentQuestion = 0;
let score = 0;

const themes = ['forest.jpg', 'ice.jpg', 'desert.jpg', 'ocean.jpg'];

const questions = [
  // Forest - Multiple Choice
  {
    type: 'choice',
    question: "Which of these is a decomposer in a forest ecosystem?",
    choices: ['Fox', 'Mushroom', 'Rabbit', 'Hawk'],
    answer: 'Mushroom',
    animal: 'squirrel.gif',
    sound: 'squirrel.mp3'
  },
  {
    type: 'choice',
    question: "What do plants produce through photosynthesis?",
    choices: ['Oxygen', 'Carbon dioxide', 'Water', 'Nitrogen'],
    answer: 'Oxygen',
    animal: 'bird.gif',
    sound: 'bird.mp3'
  },
  // Ice - Fill in the blank
  {
    type: 'fill',
    question: "Polar bears live in the ______ region.",
    answer: 'Arctic',
    animal: 'polarbear.gif',
    sound: 'polarbear.mp3'
  },
  {
    type: 'fill',
    question: "The cold ecosystem covered with ice is called ______.",
    answer: 'Tundra',
    animal: 'penguin.gif',
    sound: 'penguin.mp3'
  },
  // Desert - Multiple Choice
  {
    type: 'choice',
    question: "Which animal is well adapted to desert life?",
    choices: ['Camel', 'Frog', 'Penguin', 'Bear'],
    answer: 'Camel',
    animal: 'camel.gif',
    sound: 'camel.mp3'
  },
  {
    type: 'choice',
    question: "Which of these is a desert plant?",
    choices: ['Cactus', 'Fern', 'Moss', 'Oak'],
    answer: 'Cactus',
    animal: 'meerkat.gif',
    sound: 'meerkat.mp3'
  },
  // Ocean - Word puzzle (simplified as fill-in)
  {
    type: 'fill',
    question: "A large mammal that lives in the ocean: ______",
    answer: 'Whale',
    animal: 'whale.gif',
    sound: 'whale.mp3'
  },
  {
    type: 'fill',
    question: "Colorful fish that lives in coral reefs: ______ fish",
    answer: 'Clown',
    animal: 'clownfish.gif',
    sound: 'clownfish.mp3'
  },
  // Add more questions (up to 20) similarly...
];

function startGame() {
  bgMusic.play();
  startScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const themeIndex = Math.floor(currentQuestion / 5);
  background.style.backgroundImage = `url('${themes[themeIndex]}')`;

  quizContainer.innerHTML = `<h2>${q.question}</h2>`;

  if (q.type === 'choice') {
    q.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.className = 'answer-button';
      btn.onclick = () => checkAnswer(choice);
      quizContainer.appendChild(btn);
    });
  } else if (q.type === 'fill') {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your answer';
    input.id = 'user-input';
    quizContainer.appendChild(input);
    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    btn.className = 'answer-button';
    btn.onclick = () => checkAnswer(input.value.trim());
    quizContainer.appendChild(btn);
  }

  clickSound.play();
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function checkAnswer(answer) {
  const q = questions[currentQuestion];
  const correct = answer.toLowerCase() === q.answer.toLowerCase();

  if (correct) score++;
  showFeedback(correct, q);
}

function showFeedback(correct, q) {
  popup.textContent = correct ? 'Correct! 🌟' : `Wrong! The answer was ${q.answer}`;
  popup.style.display = 'block';
  animal.src = q.animal;
  animal.style.display = 'block';
  animalSound.src = q.sound;
  animalSound.play();

  setTimeout(() => {
    popup.style.display = 'none';
    animal.style.display = 'none';
    nextQuestion();
  }, 3000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  quizContainer.innerHTML = `<h2>Game Over! 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>`;

  let message = '';
  if (score >= 18) message = "Eco Hero! You know your planet well 🌍";
  else if (score >= 10) message = "Good job! But you can do even better 🌱";
  else message = "Keep learning, the planet needs you! 💚";

  quizContainer.innerHTML += `<p>${message}</p>`;
  progressBar.style.width = `100%`;
}
