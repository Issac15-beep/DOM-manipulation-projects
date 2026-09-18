// Project 1: Quote Generator
const quoteButton = document.querySelector('#new-quote');
const quoteText = document.querySelector('.quote');
const quotePerson = document.querySelector('.person');

const quotes = [
    { quote: '"The best way to find yourself is to lose yourself in the service of others."', person: 'Mahatma Gandhi' },
    { quote: '"If you want to live a happy life, tie it to a goal, not to people or things."', person: 'Albert Einstein' },
    { quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."', person: 'Aristotle' },
    { quote: '"Your time is limited, so dont waste it living someone else\'s life."', person: 'Steve Jobs' },
    { quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."', person: 'Benjamin Franklin' },
    { quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."', person: 'Oprah Winfrey' },
    { quote: '"It does not matter how slowly you go as long as you do not stop."', person: 'Confucius' },
    { quote: '"Our lives begin to end the day we become silent about things that matter."', person: 'Martin Luther King, Jr.' },
    { quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."', person: 'Dalai Lama' },
    { quote: '"The journey of a thousand miles begins with one step."', person: 'Lao Tzu' }
];

if (quoteButton && quoteText && quotePerson) {
    quoteButton.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.innerText = randomQuote.quote;
        quotePerson.innerText = randomQuote.person;
    });
}

// Project 2: Modal
const openButton = document.querySelector('#open-btn');
const modalContainer = document.querySelector('#modal-container');
const closeButton = document.querySelector('#close-btn');

if (openButton && modalContainer && closeButton) {
    openButton.addEventListener('click', () => {
        modalContainer.style.display = 'block';
        openButton.setAttribute('aria-expanded', 'true');
    });

    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        openButton.setAttribute('aria-expanded', 'false');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
            openButton.setAttribute('aria-expanded', 'false');
        }
    });
}

// Project 3: Accordion
const accordionItems = document.querySelectorAll('.content-container');

accordionItems.forEach((item) => {
    const heading = item.querySelector('.heading');
    if (!heading) {
        return;
    }

    heading.addEventListener('click', () => {
        item.classList.toggle('active');
        heading.setAttribute('aria-expanded', String(item.classList.contains('active')));
    });
});

// Project 4: Stopwatch
const startStopButton = document.querySelector('#startStopBtn');
const resetButton = document.querySelector('#resetBtn');
const timerDisplay = document.querySelector('#timer');

if (startStopButton && resetButton && timerDisplay) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timerInterval;
    let timerStatus = 'stopped';

    const updateTimer = () => {
        seconds += 1;

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }

        const formatTime = (value) => String(value).padStart(2, '0');
        timerDisplay.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    };

    startStopButton.addEventListener('click', () => {
        if (timerStatus === 'stopped') {
            timerInterval = window.setInterval(updateTimer, 1000);
            startStopButton.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
            timerStatus = 'started';
        } else {
            window.clearInterval(timerInterval);
            startStopButton.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
            timerStatus = 'stopped';
        }
    });

    resetButton.addEventListener('click', () => {
        window.clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        timerDisplay.innerText = '00:00:00';
        startStopButton.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = 'stopped';
    });
}

// Project 5: To-Do List
const addTaskButton = document.querySelector('#add-task');
const taskInput = document.querySelector('#input-task');
const taskContainer = document.querySelector('#task-container');

if (addTaskButton && taskInput && taskContainer) {
    const addNewTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const task = document.createElement('div');
        task.classList.add('task');

        const listItem = document.createElement('li');
        listItem.innerText = taskText;
        task.appendChild(listItem);

        const checkButton = document.createElement('button');
        checkButton.classList.add('checkTask');
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        task.appendChild(checkButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTask');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        task.appendChild(deleteButton);

        checkButton.addEventListener('click', () => {
            listItem.style.textDecoration = listItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });

        deleteButton.addEventListener('click', () => {
            task.remove();
        });

        taskContainer.appendChild(task);
        taskInput.value = '';
    };

    addTaskButton.addEventListener('click', addNewTask);
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addNewTask();
        }
    });
}
