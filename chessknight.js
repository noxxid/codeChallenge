let form = document.getElementById("chessKnight")
let knightBtn = document.getElementById("button")
let result = document.getElementById("result")
knightBtn.addEventListener("click", showPossibleMoves)


function showPossibleMoves() {
    let cell = form.value;
    let x = parseInt(cell.substring(0, 1).charCodeAt() - 64);
    let y = parseInt(cell.substring(1, 2));



    //list all possible moves that a knight can make
    let knightMoves = [
        { x: 2, y: -1 },
        { x: 2, y: 1 },
        { x: 1, y: -2 },
        { x: 1, y: 2 },
        { x: -2, y: -1 },
        { x: -2, y: 1 },
        { x: -1, y: -2 },
        { x: -1, y: 2 }
    ]

    //create an array where possibleMoves will be stored after being calculated back
    let possibleMoves = [];


    //convert row back into a letter using .fromCharCode and have column calculate final y position
    for (let m of knightMoves) {
        // was using this line for a while but when i removed the fromCharCode and just used the number i could
        // use my if statement to just filter out the ones not returning the values i needed.
        // let row = String.fromCharCode(x + m.x + 64);
        let row = x + m.x + 64;
        let column = y + m.y;

        //if it is between 97-104 then run .fromCharCode to convert back into letter, else null to be sorted later
        if (row > 97 && row < 104) {
            row = String.fromCharCode(row);
        } else {
            row = null;
        }
        //this number should always be between 0 and 9 otherwise return null
        if (column > 0 && column < 9) {
            column = y + m.y;
        } else {
            column = null;
        }

        //push row and column to the array to be displayed on the screen.
        possibleMoves.push(row + "" + column)


    }

    // i was trying to find a way to sort through my array for anything containing "null" as part of the string (ex: 'cnull' 'null2)
    //Finally stopped trying to filter out the string that had "null" in it and filtered it based off the length of the response
    let finalAnswer = possibleMoves.filter(({ length }) => (length <= 2)).sort((s1, s2) => s2.length - s1.length);






    console.log('Possible coordinates: ', finalAnswer);
    result.innerHTML = finalAnswer;
}