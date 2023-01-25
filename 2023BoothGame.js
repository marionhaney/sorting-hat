// Personality Test: JS
// Maddie Hagar, Marion Haney, Spring 2023 Harry Potter Booth Game

const questions = [
    {
        text: "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:",
        answers: [
            { text: 'Volunteer to fight?', image: "images/harry.jpg" },
            { text: 'Attempt to confuse the troll into letting all three of you pass without fighting?', image: "images/harry.jpg" },
            { text: 'Suggest that all three of you fight?', image: "images/harry.jpg" },
            { text: 'Suggest drawing straws to decide which of you will fight?', image: "images/harry.jpg" }
        ]
    },
    {
        text: "Which of the following would you most like to study?",
        answers: [
            { text: 'Merpeople', image: "images/harry.jpg" },
            { text: 'Centaurs', image: "images/harry.jpg" },
            { text: 'Werewolves', image: "images/harry.jpg" },
            { text: 'Vampires', image: "images/harry.jpg" }
        ]
    },
    {
        text: "How would you like to be known to history?",
        answers: [
            { text: "The Bold", image: "images/harry.jpg" },
            { text: "The Good", image: "images/harry.jpg" },
            { text: "The Wise", image: "images/harry.jpg" },
            { text: "The Great", image: "images/harry.jpg" }
        ]
    },
    {
        text: "What is your favorite CMU tradition?",
        answers: [
            { text: 'Painting the Fence', image: "images/harry.jpg" },
            { text: 'Buggy', image: "images/harry.jpg" },
            { text: 'Booth', image: "images/harry.jpg" },
            { text: 'O-Week', image: "images/harry.jpg" }
        ]
    },
    {
        text: "Which of these most accurately describes your relationship with your closest friends?",
        answers: [
            { text: 'I love surrounding myself with people – the more friends I have, the better!', image: "images/harry.jpg" },
            { text: 'I have a few very close friends that I would trust with my life.', image: "images/harry.jpg" },
            { text: 'I tend to be wary around new people, so I do not make new friends often.', image: "images/harry.jpg" },
            { text: 'I find myself becoming friends with people who can help me to succeed.', image: "images/harry.jpg" }
        ]
    },
    {
        text: "The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?",
        answers: [
            { text: 'Seeker. I want the glory!', image: "images/harry.jpg" },
            { text: 'Chaser. I like to be involved and work as part of the team.', image: "images/harry.jpg" },
            { text: 'Beater. I like having all that power.', image: "images/harry.jpg" },
            { text: 'I will be in the crowd, making sure supporter morale is high!', image: "images/harry.jpg" }
        ]
    },
    {
        text: "Which of your skills are you most proud of?",
        answers: [
            { text: 'My ability to absorb new information.', image: "images/harry.jpg" },
            { text: 'My ability to make new friends.', image: "images/harry.jpg" },
            { text: 'My ability to get what I want.', image: "images/harry.jpg" },
            { text: 'My ability to keep secrets.', image: "images/harry.jpg" }
        ]
    },
    {
        text: "You have a huge exam to study for, and your common room is too loud. Where do you go?",
        answers: [
            { text: 'Gates', image: "images/harry.jpg" },
            { text: 'Tepper', image: "images/harry.jpg" },
            { text: 'Sorrells Library', image: "images/harry.jpg" },
            { text: 'The UC', image: "images/harry.jpg" }
        ]
    },
    {
        text: "Which of these magical events would you most like to experience?",
        answers: [
            { text: 'The Triwizard Tournament', image: "images/harry.jpg" },
            { text: 'The Quidditch World Cup', image: "images/harry.jpg" },
            { text: 'The Yule Ball', image: "images/harry.jpg" },
            { text: 'Christmas at Hogwarts', image: "images/harry.jpg" }
        ]
    },
    {
        text: "Which path do you take?",
        answers: [
            { text: 'Twisting leafy path through the woods', image: "images/harry.jpg" },
            { text: 'A dark, lantern-lit alley', image: "images/harry.jpg" },
            { text: 'A wide, sunny, grassy path', image: "images/harry.jpg" },
            { text: 'A cobblestone street lined with ancient buildings', image: "images/harry.jpg" }
        ]
    }
]

const results = [
    { house: "Gryffindor", code: "GRY", image: "images/harry.png", desc: "Gryffindor house is where you would find the pluckiest and most daring students (there's a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall." },
    { house: "Hufflepuff", code: "HUF", image: "images/harry.jpg", desc: "Hufflepuff is the most inclusive among the four houses—valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal is a badger, and yellow and black are its colours." },
    { house: "Ravenclaw", code: "RAV", image: "images/harry.jpg", desc: "Ravenclaws possess the traits of cleverness, wisdom, wit, intellectual ability and creativity. According to Slytherin prefect Gemma Farley, Ravenclaws are so competitive when it comes to academic success that they are known to back stab each other, and likely other students, in order to get top marks." },
    { house: "Slytherin", code: "SLY", image: "images/harry.jpg", desc: "Each house has a set of traits and characteristics associated with it, and those in Slytherin are known for being ambitious, cunning, and resourceful. Slytherins are also sometimes regarded as being evil thanks to the fact that many of the most sinister witches and wizards have been associated with this house." }
]

const keyCodes = ['49', '50', '51', '52']
const numHouses = 4
const numQuestions = 10
const maxIdleTime = 59
const minIdLength = 2
const enter = '13'
const space = '32'
const restart = '48'
const countString = "/".concat(numQuestions.toString())

var sessionID = ""
var userName = ""
var result = ""
var started = false
var finished = false
var idle = false
var idleTime = 0
var currentQuestion = 0
var chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var question = questions[currentQuestion]
var questionBlock = document.createElement('div')
var questionHeading = document.createElement('h2')
var answersBlock = document.createElement('div')
var counter = document.createElement('div')
var session = document.createElement('div')
var startScreen = document.createElement('div')
var idleScreen = document.createElement('div')
var reset = document.createElement('top-caption')
var images = document.getElementsByTagName("img");
var titleDisplay = document.querySelector('#titles')
var questionDisplay = document.querySelector('#questions')
var answerDisplay = document.querySelector('#answer')
var formDisplay = document.querySelector('#form')

document.addEventListener("keyup", handleKeyEvent)
idleScreen.classList.add('idle')
idleScreen.classList.add('hide')
questionDisplay.append(idleScreen)
window.setInterval(checkIdleTime, 60000)
window.setInterval(incIdleTime, 1000)

function showStart() {
    startScreen.classList.add('start-block')
    startScreen.textContent = "Welcome to Kappa Alpha Theta's Spring 2023 booth! \nAre you excited to get sorted into your Hogwarts House? \nYou will be asked a series of questions with color coded answers. \nPress the button of the matching color to select your answer! \nPut on the hat and press enter to start. Have fun!"
    questionDisplay.append(startScreen)
}

function incIdleTime() {
    idleTime++
    if (idle) {
        showIdleScreen()
    }
}

function checkIdleTime() {
    if (idleTime >= maxIdleTime && !finished) {
        showIdleScreen()
    }
}

function resetGlobals() {
    sessionID = ""
    userName = ""
    result = ""
    started = false
    finished = false
    idle = false
    idleTime = 0
    currentQuestion = 0
    chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    question = questions[currentQuestion]
    document.getElementById('name_entry').value = ''
}

function resetQuiz() {
    resetQuestion()
    resetGlobals()
    showStart()
}

function hideQuizScreen() {
    for (var i = 0; i < questionBlock.children.length; i++) {
        var child = questionBlock.children[i]
        child.classList.add('hide')
    }
    for (var i = 0; i < questionHeading.children.length; i++) {
        var child = questionHeading.children[i]
        child.classList.add('hide')
    }
    for (var i = 0; i < answersBlock.children.length; i++) {
        var child = answersBlock.children[i]
        child.classList.add('hide')
    }
    for (var i = 0; i < questionDisplay.children.length; i++) {
        var child = questionDisplay.children[i]
        child.classList.add('hide')
    }
}

function restoreQuizScreen() {
    for (var i = 0; i < questionBlock.children.length; i++) {
        var child = questionBlock.children[i]
        child.classList.remove('hide')
    }
    for (var i = 0; i < questionHeading.children.length; i++) {
        var child = questionHeading.children[i]
        child.classList.remove('hide')
    }
    for (var i = 0; i < answersBlock.children.length; i++) {
        var child = answersBlock.children[i]
        child.classList.remove('hide')
    }
    for (var i = 0; i < questionDisplay.children.length; i++) {
        var child = questionDisplay.children[i]
        child.classList.remove('hide')
    }

}

function showIdleScreen() {
    idle = true
    hideQuizScreen()
    const time = idleTime.toString()
    const idleTxt = "You've been idle for " + time + "s. Press space to resume."
    idleScreen.textContent = idleTxt
    idleScreen.classList.remove('hide')
}

function hideIdleScreen() {
    restoreQuizScreen()
    idleScreen.classList.add('hide')
}

function resetQuestion() {
    while (questionBlock.firstChild) {
        questionBlock.removeChild(questionBlock.firstChild)
    }
    while (questionHeading.firstChild) {
        questionHeading.removeChild(questionHeading.firstChild)
    }
    while (answersBlock.firstChild) {
        answersBlock.removeChild(answersBlock.firstChild)
    }
    while (questionDisplay.firstChild) {
        questionDisplay.removeChild(questionDisplay.firstChild)
    }
    while (answerDisplay.firstChild) {
        answerDisplay.removeChild(answerDisplay.firstChild)
    }
    while (titleDisplay.firstChild) {
        titleDisplay.removeChild(titleDisplay.firstChild)
    }
    formDisplay.classList.add('hide')
}

function populateQuestion(index) {
    titleDisplay.append(reset)
    questionDisplay.append(session)
    question = questions[index]
    questionBlock.id = currentQuestion
    questionBlock.classList.add('question-block')

    counter.textContent = (currentQuestion + 1).toString().concat(countString)
    counter.classList.add('counter')
    questionDisplay.append(counter)

    questionHeading.textContent = question.text
    questionBlock.append(questionHeading)
    questionDisplay.append(questionBlock)

    answersBlock.id = currentQuestion + "-questions"
    answersBlock.classList.add('answer-options')

    for (var i = 0; i < numHouses; i++) {
        const answer = question.answers[i]
        const answerBlock = document.createElement('div')
        answerBlock.classList.add('answer-block')

        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text

        answerBlock.append(answerImage, answerTitle)
        answersBlock.append(answerBlock)
    }
    questionDisplay.append(answersBlock)
}

function handleKeyEvent(evt) {
    idleTime = 0
    if (idle && evt.keyCode == space) {
        idle = false
        hideIdleScreen()
    } else if (evt.keyCode == restart) {
        resetQuiz()
    } else if (started) {
        showNextQuestion(evt)
    } else if (evt.keyCode == enter) {
        startQuiz()
    }
}

function startQuiz() {
    started = true
    resetQuestion()
    showNameEntry()
}

function showNextQuestion(evt) {
    for (var i = 0; i < numHouses; i++) {
        if (evt.keyCode == keyCodes[i]) {
            const qId = currentQuestion
            const ansId = i + 1
            processAnswer(qId, ansId)
            return
        }
    }
    if (sessionID.length < minIdLength && evt.keyCode == '13') {
        var name = document.getElementById('name_entry').value
        if (name.length > 1) {
            formDisplay.classList.add('hide')
            setSessionID(name)
        }
    }
}

function showNameEntry() {
    formDisplay.classList.remove('hide')
    reset.textContent = "Press 0 to restart."
    titleDisplay.append(reset)
}

function setSessionID(name) {
    formDisplay.classList.add('hide')
    var date = new Date().toLocaleDateString()
    userName = name
    sessionID = name.concat(date)
    session.classList.add('session-id')
    session.textContent = name
    populateQuestion(currentQuestion)
}

function processAnswer(questionId, answerId) {
    chosenAnswers[questionId] = answerId
    currentQuestion++
    resetQuestion()
    if (currentQuestion < numQuestions) {
        populateQuestion(currentQuestion)
    } else {
        //showAnswer();
        // this is the end of the test, analyze the session data
        console.log("Sorting you into your house... \n");
        var S = new SessionData(sessionID, userName);
        analyzeSession(S, chosenAnswers);
        console.log(S);
    }
}

showStart()
