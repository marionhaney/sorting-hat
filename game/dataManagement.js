// Data Management: JS objects and functions for data storage and management
// all globals and helper functions
// Marion Haney, Spring 2023 Harry Potter Booth Game

// global variable: lookup table for the question/answer point values
const QALookup = [
    [[80,5,0,15], [0,10,90,0], [20,0,0,80], [0,90,10,0]],
    [[15,20,60,5], [5,60,20,15], [75,0,0,25], [20,0,0,80]],
    [[0,0,0,100], [0,0,100,0], [100,0,0,0], [0,100,0,0]],
    [[20,10,0,70], [20,10,70,0], [60,5,20,15], [15,75,3,7]],
    [[0,100,0,0], [100,0,0,0], [0,0,100,0], [0,0,0,100]],
    [[100,0,0,0], [0,80,20,0], [0,0,0,100], [0,20,80,0]],
    [[0,0,100,0], [0,100,0,0], [0,0,0,100], [100,0,0,0]],
    [[0,0,75,25], [75,15,0,10], [0,0,25,75], [15,80,0,5]],
    [[100,0,0,0], [0,0,0,100], [0,0,100,0], [0,100,0,0]],
    [[70,0,0,30], [30,0,0,70], [0,100,0,0], [0,0,100,0]]
];


// class for session data-- one instance is one person's session
class SessionData {
    constructor(sessionID, name) {
        this.sessionID = sessionID;
        this.name = name;
        this.house ="";
        this.GRY = 0;
        this.HUF = 0;
        this.RAV = 0;
        this.SLY = 0;
    }
}

// ***NOT MVP*** class to store all sessions, each session is appended to the list
class AllSessionData {
    constructor() {
        this.sessions = [];
        this.GRYRoster = []; // list of names in each house
        this.HUFRoster = [];
        this.RAVRoster = [];
        this.SLYRoster = [];
    };
};

allSessions = new AllSessionData();


// function for analyzing the results, takes in a SessionData object and the array of chosen answers
function analyzeSession(S, chosenAnswers) {
    
    for (let i = 0; i <= 9; i++) {
        answer = chosenAnswers[i];
        vals = QALookup[i, answer];
        S.GRY += parseInt(vals[0]);
        S.HUF += parseInt(vals[1]);
        S.RAV += parseInt(vals[2]);
        S.SLY += parseInt(vals[3]);
    }
    let endSums = [S.GRY, S.HUF, S.RAV, S.SLY];
    let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let whichMax = endSums.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    S.house = houses[whichMax];
    S.totalPoints = 0;
    for (let i = 0; i < endSums.length; i++) {
        S.totalPoints += endSums[i];
    };

    // *** NOT MVP*** add session to all session data
    allSessions.sessions.push(S);
    if (S.house == "Gryffindor") {
        allSessions.GRYRoster.push(S.name);
    } else if (S.house == "Hufflepuff") {
        allSessions.HUFRoster.push(S.name);
    } else if (S.house == "Ravenclaw") {
        allSessions.RAVRoster.push(S.name);
    } else { // Slytherin
        allSessions.SLYRoster.push(S.name);
    };
};


// Function to create a pie chart based on the personality test results
function createChart(sessionData) {
    // create the chart
    var chart = document.getElementById("myChart");
    var myChart = new Chart(chart, {
        type: 'pie',
        data: {
            labels: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
            datasets: [{
                label: 'House Percentage',
                data: [sessionData.GRY/sessionData.totalPoints, 
                    sessionData.HUF/sessionData.totalPoints, 
                    sessionData.RAV/sessionData.totalPoints, 
                    sessionData.SLY/sessionData.totalPoints
                ],
                backgroundColor: [
                    '#cd373c',
                    '#FFD800',
                    '#0E1A40',
                    '#1A472A'
                ],
                borderColor: [
                    '#cd373c',
                    '#FFD800',
                    '#0E1A40',
                    '#1A472A'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    myChart.update();
};
