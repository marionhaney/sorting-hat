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

var firstSession = true;
var myChart = null;


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
    { house: "Gryffindor", code: "GRY", image: "graphics/gryff.png", desc: "Gryffindor is known for its bravery, courage, and determination. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Ted Danson, an accomplished actor known for his roles in popular TV shows like Cheers and The Good Place. Danson's dedication to his craft and willingness to take on challenging roles exemplifies the bravery and determination that Gryffindors are known for. \n"},
    { house: "Hufflepuff", code: "HUF", image: "graphics/huff.jpg", desc: "Hufflepuff is known for its loyalty, hard work, and kindness. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Randy Pausch, a computer science professor known for his inspiring 'Last Lecture' that went viral on the internet. Pausch's dedication to teaching and his positive attitude towards life exemplify the loyalty, hard work, and kindness that Hufflepuffs are known for. \n" },
    { house: "Ravenclaw", code: "RAV", image: "graphics/raven.jpg", desc: "Ravenclaw is known for its wit, wisdom, and intelligence. To embody these traits, we can look to the famous alumni of Carnegie Mellon University, a prestigious institution known for producing top-notch scholars and innovators. One such example is Andrew Moore, who served as the Dean of the School of Computer Science at Carnegie Mellon and later worked for Google as the Vice President of Engineering. His expertise in machine learning and computer vision exemplifies the intellectual curiosity and analytical prowess that Ravenclaws are known for. \n" },
    { house: "Slytherin", code: "SLY", image: "graphics/slyth.jpg", desc: "Slytherin is known for its cunning, ambition, and resourcefulness. To embody these traits, we can look to the famous alumni of Carnegie Mellon University who have shown similar characteristics. One such example is Alan Newell, a computer science pioneer who co-founded the Artificial Intelligence Center at Carnegie Mellon. Newell's innovative and strategic thinking in the field of computer science exemplifies the cunning and resourcefulness that Slytherins are known for. \n" }
]

const titleAudio = new Audio('audio/comeForth.mp3');
const hogwartsSongAudio = new Audio('audio/hogwarts_school_song.mp3');
const difficultAudio = new Audio('audio/difficult-very-difficult.m4a');
const courageAudio = new Audio('audio/plenty-of-courage.m4a');
const whereToPutAudio = new Audio('audio/but-where-to-put-you.m4a');
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
const enter = '13'
const space = '32'
const restart = '32'
const countString = "/".concat(numQuestions.toString())
const titleImage = "graphics/TITLE.jpg"
const startImage = document.createElement('img')
const blankImage = "graphics/blank.png"
startImage.setAttribute('src', titleImage)

var sessionID = ""
var userName = ""
var result = ""
var started = false
var instructionsShowed = false
var finished = false
var currentQuestion = 0
var chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var question = questions[currentQuestion]
var questionBlock = document.createElement('div')
var questionHeading = document.createElement('h2')
var answersBlock = document.createElement('div')
var counter = document.createElement('div')
var session = document.createElement('div')
var startScreen = document.createElement('div')
var reset = document.createElement('top-caption')
var images = document.getElementsByTagName("img");
var titleDisplay = document.querySelector('#titles')
var instructionsButton = document.createElement('button')
var startButton = document.createElement('button')
var questionDisplay = document.querySelector('#questions')
var answerDisplay = document.querySelector('#answer')

document.addEventListener("keyup", handleKeyEvent)
startButton.addEventListener("mouseup", handleClickEvent)
instructionsButton.addEventListener("mouseup", handleClickEvent)

function showStart() {
    startScreen.classList.add('start-block')
    startScreen.textContent = "Welcome to Kappa Alpha Theta's Spring 2023 booth! \nAre you excited to get sorted into your Hogwarts House? \n Click the button below to view the instructions before starting!\n"
    instructionsButton.textContent = "Show Instructions"
    startScreen.append(instructionsButton)
    questionDisplay.append(startImage)
    questionDisplay.append(startScreen)
}

function showInstructions() {
    instructionsShowed = true
    startScreen.classList.add('start-block')
    startScreen.textContent = "You will be asked a series of questions with color coded answers. \nPress the button of the matching color to select your answer! \n Click the start button to begin. Have fun!\n"
    startButton.textContent = "Start"
    startScreen.append(startButton)
    questionDisplay.append(startImage)
    questionDisplay.append(startScreen)
}

function resetGlobals() {
    sessionID = ""
    userName = ""
    result = ""
    started = false
    finished = false
    instructionsShowed = false
    currentQuestion = 0
    chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    question = questions[currentQuestion]
    buttonPresses.presses = []
    buttonPresses.numPresses = 0
    firstSession = false
    var canvas = document.getElementsByTagName("canvas")[0]
    canvas.style.display = "none";
}

function resetQuiz() {
    //window.location.reload(); 
    resetQuestion()
    resetGlobals()
    showStart()
}

function removeTitleScreen() {
    while (questionDisplay.firstChild) {
        questionDisplay.removeChild(questionDisplay.firstChild)
    }
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

function handleClickEvent(evt) {
    startQuiz()
}

function handleKeyEvent(evt) {
    if (instructionsShowed && evt.keyCode == restart) {
        resetQuiz()
        showStart()
    } else if (started && instructionsShowed) {
        showNextQuestion(evt)
    }
}

function startQuiz() {
    removeTitleScreen()
    if (!instructionsShowed) {
        showInstructions()
        playTitleAudio()
    } else if (!started) {
        started = true
        populateQuestion(0)
    } else if (finished) {
        resetQuiz()
    }
}

function showNextQuestion(evt) {
    if (currentQuestion == 10) return
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
    if (qId == 10) return;
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


function processAnswer(questionId, answerId) {
    chosenAnswers[questionId] = answerId
    currentQuestion++
    resetQuestion()
    if (currentQuestion < numQuestions) {
        // play sorting hat audio after the 2nd question
        if (currentQuestion == 2) {
            stopAudio(titleAudio);
            setTimeout(playDifficult, 1330);
            socket.emit('send', "mouthLong\n");
        } else if (currentQuestion == 5) {
            setTimeout(playCourage, 1330);
            socket.emit('send', "mouthLong\n");
        } else if (currentQuestion == 8) {
            setTimeout(playWhere, 1330);
            socket.emit('send', "mouthLong\n");
        }
        populateQuestion(currentQuestion)
    } else {
        var S = new SessionData(sessionID, userName);
        analyzeSession(S, chosenAnswers);
        showAnswer(S);
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.style.display = "block";
        if (firstSession && myChart == null) {
            createChart(S);
        } else {
            updateChart(myChart, S);
        }
    }
}

function showAnswer(S) {
    finished = true
    var house = S.house
    // add logic to play specific noise according to house
    setTimeout(playHouseAudio, 1230, house);
    socket.emit('send', "mouthShort\n");
    reset.textContent = "Press 'SPACE' to restart."
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
    
    const answerDesc = document.createElement('p')
    const welcome = '\nWelcome to ' + result.house + userName + '!'
    answerDesc.textContent = result.desc + welcome
    
    answerBlock.append(answerTitle, answerDesc, reset)
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
    socket.emit('send', "eyebrows\n");
    titleAudio.play();
};

function playDifficult() {
    difficultAudio.play();
};

function playCourage() {
    courageAudio.play();
};

function playWhere() {
    whereToPutAudio.play();
};

function stopAudio(a) {
    a.pause();
    a.currentTime = 0;
};


showStart();
