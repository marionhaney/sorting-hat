// Personality Test: JS
// Maddie Hagar, Marion Haney, Spring 2023 Harry Potter Booth Game

// object to store button presses
var buttonPresses = {
    presses: [], 
    numPresses: 0
};
socket.on('button_press', function(data) {
    var strData = data.substring(0, data.length - 1);
    buttonPresses.presses.push(strData);
    buttonPresses.numPresses += 1;
    buttonShowNextQuestion(strData);
});

const questions = [
    {
        text: "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:",
        answers: [
            { text: 'Volunteer to fight?', image: "graphics/volunteer.jpg" },
            { text: 'Attempt to confuse the troll into letting all three of you pass without fighting?', image: "graphics/confuse.jpg" },
            { text: 'Suggest that all three of you fight?', image: "graphics/allFight.jpg" },
            { text: 'Suggest drawing straws to decide which of you will fight?', image: "graphics/drawStraws.jpg" }
        ]
    },
    {
        text: "Which of the following would you most like to study?",
        answers: [
            { text: 'Merpeople', image: "graphics/merpeople.jpg" },
            { text: 'Centaurs', image: "graphics/centaur.jpg" },
            { text: 'Werewolves', image: "graphics/werewolf.jpg" },
            { text: 'Vampires', image: "graphics/vampire.jpg" }
        ]
    },
    {
        text: "How would you like to be known to history?",
        answers: [
            { text: "The Bold", image: "graphics/bold.jpg" },
            { text: "The Good", image: "graphics/good.jpg" },
            { text: "The Wise", image: "graphics/wise.jpg" },
            { text: "The Great", image: "graphics/great.jpg" }
        ]
    },
    {
        text: "What is your favorite CMU tradition?",
        answers: [
            { text: 'Painting the Fence', image: "graphics/fence.jpg" },
            { text: 'Buggy', image: "graphics/buggy.jpg" },
            { text: 'Booth', image: "graphics/booth.jpg" },
            { text: 'O-Week', image: "graphics/oweek.jpg" }
        ]
    },
    {
        text: "Which of these most accurately describes your relationship with your closest friends?",
        answers: [
            { text: 'I love surrounding myself with people – the more friends I have, the better!', image: "graphics/surrounded.jpg" },
            { text: 'I have a few very close friends that I would trust with my life.', image: "graphics/few.jpg" },
            { text: 'I tend to be wary around new people, so I do not make new friends often.', image: "graphics/wary.jpg" },
            { text: 'I find myself becoming friends with people who can help me to succeed.', image: "graphics/succeed.jpg" }
        ]
    },
    {
        text: "The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?",
        answers: [
            { text: 'Seeker. I want the glory!', image: "graphics/seeker.jpg" },
            { text: 'Chaser. I like to be involved and work as part of the team.', image: "graphics/chaser.jpg" },
            { text: 'Beater. I like having all that power.', image: "graphics/beater.jpg" },
            { text: 'I will be in the crowd, making sure supporter morale is high!', image: "graphics/crowd.jpg" }
        ]
    },
    {
        text: "Which of your skills are you most proud of?",
        answers: [
            { text: 'My ability to absorb new information.', image: "graphics/absorbInfo.jpg" },
            { text: 'My ability to make new friends.', image: "graphics/makeFriends.jpg" },
            { text: 'My ability to get what I want.', image: "graphics/getWant.jpg" },
            { text: 'My ability to keep secrets.', image: "graphics/secrets.jpg" }
        ]
    },
    {
        text: "You have a huge exam to study for, and your common room is too loud. Where do you go?",
        answers: [
            { text: 'Gates', image: "graphics/gates.jpg" },
            { text: 'Tepper', image: "graphics/tepper.jpg" },
            { text: 'Sorrells Library', image: "graphics/sorrells.jpg" },
            { text: 'The UC', image: "graphics/uc.jpg" }
        ]
    },
    {
        text: "Which of these magical events would you most like to experience?",
        answers: [
            { text: 'The Triwizard Tournament', image: "graphics/triwizard.jpg" },
            { text: 'The Quidditch World Cup', image: "graphics/worldCup.jpg" },
            { text: 'The Yule Ball', image: "graphics/yuleBall.jpg" },
            { text: 'Christmas at Hogwarts', image: "graphics/christmas.jpg" }
        ]
    },
    {
        text: "Which path do you take?",
        answers: [
            { text: 'Twisting leafy path through the woods', image: "graphics/forest.jpg" },
            { text: 'A dark, lantern-lit alley', image: "graphics/alley.jpg" },
            { text: 'A wide, sunny, grassy path', image: "graphics/grassy.jpg" },
            { text: 'A cobblestone street lined with ancient buildings', image: "graphics/street.jpg" }
        ]
    }
]

const results = [
    { house: "Gryffindor", code: "GRY", image: "graphics/gryff.png", desc: "Gryffindor is known for its bravery, courage, and determination. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Ted Danson, an accomplished actor known for his roles in popular TV shows like Cheers and The Good Place. Danson's dedication to his craft and willingness to take on challenging roles exemplifies the bravery and determination that Gryffindors are known for." },
    { house: "Hufflepuff", code: "HUF", image: "graphics/huff.jpg", desc: "Hufflepuff is known for its loyalty, hard work, and kindness. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Randy Pausch, a computer science professor known for his inspiring 'Last Lecture' that went viral on the internet. Pausch's dedication to teaching and his positive attitude towards life exemplify the loyalty, hard work, and kindness that Hufflepuffs are known for." },
    { house: "Ravenclaw", code: "RAV", image: "graphics/raven.jpg", desc: "Ravenclaw is known for its wit, wisdom, and intelligence. To embody these traits, we can look to the famous alumni of Carnegie Mellon University, a prestigious institution known for producing top-notch scholars and innovators. One such example is Andrew Moore, who served as the Dean of the School of Computer Science at Carnegie Mellon and later worked for Google as the Vice President of Engineering. His expertise in machine learning and computer vision exemplifies the intellectual curiosity and analytical prowess that Ravenclaws are known for." },
    { house: "Slytherin", code: "SLY", image: "graphics/slyth.jpg", desc: "Slytherin is known for its cunning, ambition, and resourcefulness. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Ted Hoff, who co-invented the microprocessor and helped launch the computer revolution. Hoff's innovative and strategic thinking exemplifies the cunning and resourcefulness that Slytherins are known for." }
]

const titleAudio = new Audio('audio/comeForth.mp3');
const hogwartsSongAudio = new Audio('audio/hogwarts_school_song.mp3');
const difficultAudio = new Audio('audio/very_difficult.m4a');
const gryAudio = new Audio('audio/gryffindor.mp3');
const hufAudio = new Audio('audio/hufflepuff.mp3');
const slyAudio = new Audio('audio/slytherin.m4a');
const ravAudio = new Audio('audio/ravenclaw.m4a');

const houseAudios = [gryAudio, hufAudio, ravAudio, slyAudio];
const audios = [difficultAudio, hogwartsSongAudio]; // add more random audios


const keyCodes = ['49', '50', '51', '52']
const colors = ['#E1E1E1', '#7ADFFF', '#61DE7A', '#FFF056']
const numHouses = 4
const numQuestions = 10
const maxIdleTime = 59
const minIdLength = 2
const enter = '13'
const space = '32'
//const restart = '48'
const countString = "/".concat(numQuestions.toString())
const titleImage = "graphics/TITLE.jpg"
const startImage = document.createElement('img')
startImage.setAttribute('src', titleImage)

var sessionID = ""
var userName = ""
var result = ""
var started = false
var nameEntered = false
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
//var reset = document.createElement('top-caption')
var images = document.getElementsByTagName("img");
var titleDisplay = document.querySelector('#titles')
var questionDisplay = document.querySelector('#questions')
var answerDisplay = document.querySelector('#answer')
var formDisplay = document.querySelector('#form')


document.addEventListener("keyup", handleKeyEvent)


idleScreen.classList.add('idle')
idleScreen.classList.add('hide')
questionDisplay.append(idleScreen)
window.setInterval(checkIdleTime, 900000)
window.setInterval(incIdleTime, 1000)

function showStart() {
    startScreen.classList.add('start-block')
    startScreen.textContent = "Welcome to Kappa Alpha Theta's Spring 2023 booth! \nAre you excited to get sorted into your Hogwarts House? \nYou will be asked a series of questions with color coded answers. \nPress the button of the matching color to select your answer! \nPress enter to start. Have fun!"
    titleDisplay.append(startImage)
    titleDisplay.append(startScreen)
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
    nameEntered = false
    idle = false
    idleTime = 0
    currentQuestion = 0
    chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    question = questions[currentQuestion]
    document.getElementById('name_entry').value = ''
    // clear chart
    var canvas = document.getElementById("myChart");
    canvas.remove();
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
    titleDisplay.append(startImage)
    idleScreen.classList.remove('hide')
}

function hideIdleScreen() {
    restoreQuizScreen()
    titleDisplay.remove(startImage)
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
    if (index == 0) titleDisplay.remove(startImage)
    //titleDisplay.append(reset)
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
        answerBlock.style.backgroundColor = colors[i]
        answerBlock.style.boxShadow = colors[i]+" 0 0 0 5px"
        answersBlock.append(answerBlock)
    }
    questionDisplay.append(answersBlock)
}

function handleKeyEvent(evt) {
    idleTime = 0
    if (idle && evt.keyCode == space) {
        idle = false
        hideIdleScreen()
    //} else if (nameEntered && evt.keyCode == restart) {
        //resetQuiz()
    } else if (started) {
        showNextQuestion(evt)
    } else if (evt.keyCode == enter) {
        startQuiz()
        playTitleAudio();
    }
}

function startQuiz() {
    started = true
    resetQuestion()
    showNameEntry()
}

function showNextQuestion(evt) {
    if (sessionID.length < minIdLength && evt.keyCode == '13') {
        var name = document.getElementById('name_entry').value
        formDisplay.classList.add('hide')
        setSessionID(name)
        nameEntered = true
    }

    if (!nameEntered) return

    for (var i = 0; i < numHouses; i++) {
        // 1,2,3,4 keyboard presses
        if (evt.keyCode == keyCodes[i]) {
            const qId = currentQuestion
            const ansId = i + 1
            processAnswer(qId, ansId)
            return
        }
    }
}

function buttonShowNextQuestion(strData) {
    // answer 1,2,3,4
    // check buttonPresses
    //console.log("button was pressed!");
    // there was a new button press
    buttonPresses.prevPresses += 1;
    const qId = currentQuestion;
    // white: 1, blue: 2, green: 3, yellow: 4
    var ansId = -1;
    if (strData == "WHITE") {
        ansId = 1;
    } else if (strData == "BLUE") {
        ansId = 2;
    } else if (strData == "GREEN") {
        ansId = 3;
    } else {
        ansId = 4;
    }
    processAnswer(qId, ansId);
    return;
}

function showNameEntry() {
    formDisplay.classList.remove('hide')
    //reset.textContent = "Press 0 to restart."
    titleDisplay.append(startImage)
    //titleDisplay.append(reset)
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
        // play sorting hat audio after the 2nd question
        if (currentQuestion == 1) {
            socket.on("data", (arg) => {
                console.log("sending ", arg, " message to hat")
            })
        } else if (currentQuestion == 2) {
            stopAudio(titleAudio);
            difficultAudio.play();
            // call arduino here!
        }
        populateQuestion(currentQuestion)
    } else {
        var S = new SessionData(sessionID, userName);
        analyzeSession(S, chosenAnswers);
        showAnswer(S)
        createChart(S);
    }
}

function showAnswer(S) {
    finished = true
    var house = S.house
    // add logic to play specific noise according to house
    stopAudio(difficultAudio);
    playHouseAudio(house);
    // call arduino here!
    
    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = house

    var id = 0
    var result = results[0]
    while (result.house != house) {
        id++
        result = results[id]
    }

    //const answerImage = document.createElement('img')
    //answerImage.setAttribute('src', result.image)
    
    const answerDesc = document.createElement('p')
    const welcome = '\nWelcome to ' + result.house + ', '  + userName + '!'
    answerDesc.textContent = result.desc + welcome
    
    answerBlock.append(answerTitle, answerDesc)//, answerImage)
    answerDisplay.append(session, answerBlock)
}

function playHouseAudio(house) {
    if (house == 'Gryffindor') {
        houseAudios[0].play();
    } else if (house == 'Hufflepuff') {
        houseAudios[1].play();
    } else if (house == 'Ravenclaw') {
        houseAudios[2].play();
    } else if (house == 'Slytherin') {
        houseAudios[3].play();
    };
};


function playTitleAudio() {
    titleAudio.play();
};

function stopAudio(a) {
    a.pause();
    a.currentTime = 0;
};


showStart();
