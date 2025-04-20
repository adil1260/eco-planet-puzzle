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
    {
        question: "What is the primary cause of climate change?",
        options: [
            "Human activities, especially burning fossil fuels",
            "Natural weather patterns",
            "Animal migration",
            "Solar flares"
        ],
        correctAnswer: 0
    },
    {
        question: "Which gas is primarily responsible for the greenhouse effect?",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main function of trees in the ecosystem?",
        options: [
            "Providing oxygen through photosynthesis",
            "Growing fruits and vegetables",
            "Reducing animal populations",
            "Producing food for human consumption"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these is a renewable resource?",
        options: [
            "Coal",
            "Oil",
            "Wind energy",
            "Natural gas"
        ],
        correctAnswer: 2
    },
    {
        question: "What is deforestation?",
        options: [
            "The process of planting trees",
            "The removal of forests to make space for agriculture or urban development",
            "The act of protecting forests",
            "The natural lifecycle of a forest"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the term 'sustainability' refer to?",
        options: [
            "Exploiting natural resources without concern for the future",
            "Meeting current needs without compromising the ability of future generations to meet theirs",
            "Building as many factories as possible",
            "Consuming as much energy as possible"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the biggest threat to ocean ecosystems?",
        options: [
            "Pollution and overfishing",
            "Rising temperatures",
            "Human activities on land",
            "Decreasing fish populations"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these animals is considered an apex predator in the ocean?",
        options: [
            "Shark",
            "Plankton",
            "Seaweed",
            "Coral"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT an example of pollution?",
        options: [
            "Wastewater disposal into rivers",
            "Plastic waste in oceans",
            "The production of solar panels",
            "Airborne industrial emissions"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the greenhouse effect?",
        options: [
            "The warming of the Earth's surface due to trapped gases in the atmosphere",
            "The cooling of the Earth's surface due to natural processes",
            "The reflection of sunlight from the Earth's surface",
            "The absorption of solar radiation by the ocean"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Argon"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a 'carbon footprint'?",
        options: [
            "The total amount of carbon dioxide and other greenhouse gases emitted by human activities",
            "A measure of the carbon content in soil",
            "The process of planting trees to offset emissions",
            "The carbon-based materials in products we use"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a consequence of climate change?",
        options: [
            "Rising sea levels",
            "Increased wildfires",
            "Stronger and more frequent hurricanes",
            "Global cooling"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the process by which plants absorb sunlight and convert it into food?",
        options: [
            "Respiration",
            "Photosynthesis",
            "Transpiration",
            "Fermentation"
        ],
        correctAnswer: 1
    },
    {
        question: "What is an invasive species?",
        options: [
            "A species that is native to an ecosystem",
            "A species that causes harm to the environment and human health",
            "A species that adapts well to any environment",
            "A species that has no natural predators"
        ],
        correctAnswer: 1
    },
    {
       
