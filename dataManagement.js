// Data Management: JS object and functions for data storage and management
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
        this.result = {house:"", GRY: 0, HUF: 0, RAV: 0, SLY:0};
    }
  }


// function for analyzing the results, takes in a SessionData object and the array of chosen answers
function analyzeSession(S, chosenAnswers) {
    for (let i = 0; i <= 9; i++) {
        answer = chosenAnswers[i];
        vals = QALookup[i, answer];
        this.result.GRY += vals[0];
        this.result.HUF += vals[1];
        this.result.RAV += vals[2];
        this.result.SLY += vals[3];
    }
    let endSums = [this.result.GRY, this.result.HUF, this.result.RAV, this.result.SLY];
    let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let whichMax = endSums.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    this.house = houses[whichMax];
    console.log("You are " + this.house + " !");
}

