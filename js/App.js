//for the order of games (will figure out spinoffs and such later)
const GAME_ORDER={
    'Shadow Dragon and the Blade of Light': [1, "FE1"],
    'Gaiden': [2, "FE2"],
    'Mystery of the Emblem': [3, "FE3"],
    'Genealogy of the Holy War': [4, "FE4"],
    'Thracia 776': [5, "FE5"],
    'The Binding Blade': [6, "FE6"],
    'The Blazing Blade': [7, "FE7"],
    'The Sacred Stones': [8, "FE8"],
    'Path of Radiance': [9, "FE9"],
    'Radiant Dawn': [10, "FE10"],
    'Shadow Dragon': [11, "FE11"],
    'New Mystery of the Emblem': [12, "FE12"],
    'Awakening': [13, "FE13"],
    'Fates': [14, "FE14"],
    'Shadows of Valentia': [15, "FE15"],
    'Three Houses': [16, "FE16"],
    'Engage': [17, "FE17"]
};

const MAX_GUESSES = 10;
const MAX_QUOTE_GUESSES = 5;
const MAX_MUSIC_GUESSES = 5;
const MUSIC_DURATION = [1, 2, 5, 10, 30]; //secs for music guesses
const TIMEZONE = "America/New_York";

//gets the current date in US EST/EDT format for daily puzzle
function getTodayString(){
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', { timeZone: TIMEZONE}); //MM DD YYYY format
}

//for game
let currentPage = 'character';
let dailyAnswer = null;
let pastGuesses = [];
let guessInput = '';
let lastGuessCount = 0;
let quoteHints = {convoType : false, game: false, recipient: false};
let musicHints = {game : false};
let currentMusic = null;
let musicGuessCount = 0;
//let musicVolume = parseFloat(localStorage.getItem('musicVolume')) || 0.5; //default volume is 0.5
let givenUp = {character: false};


// random num generator seed 
function randomSeed(seed){
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

//for guessing characters
// function guessCharacter(){
//     //searching characters/sorting names
//     const suggestions = guessInput
//     ? CHARACTERS.filter(c =>
//         c.name.toLowerCase().includes(guessInput.toLowerCase()) &&
//         !realGuesses.find(g => g.id === c.id)
//       ).sort((a, b) => {
//         const aStarts = a.name.toLowerCase().startsWith(guessInput.toLowerCase());
//         const bStarts = b.name.toLowerCase().startsWith(guessInput.toLowerCase());
//         if (aStarts && !bStarts) return -1;
//         if (!aStarts && bStarts) return 1;
//         return a.name.localeCompare(b.name);
//       })
//     : [];
// }