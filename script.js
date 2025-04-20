document.getElementById('start-btn').addEventListener('click', function() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.quiz-screen').style.display = 'block';
});

const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', function() {
        let answer = option.innerText;
        if (answer === 'A community of living organisms interacting with each other and their environment') {
            alert('Correct! Well done!');
        } else {
            alert('Oops! That\'s not correct. Try again!');
        }
    });
});