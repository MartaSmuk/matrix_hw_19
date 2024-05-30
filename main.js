"use strict";

// let nArrayLength = +prompt("Please enter array length");
let nArrayLength = 3;
let chosenNum = 4;
let rowIndex = 2;
let colIndex = 2;


let matrixArray = [];
for (let i = 0; i < nArrayLength; i++) {  //iterate rows
    matrixArray[i] = [];
    for (let j = 0; j < nArrayLength; j++) {    //iterate columns
        matrixArray[i][j] = Math.floor(Math.random() * nArrayLength);
        if(i === 0 && j === nArrayLength) {
            matrixArray[i][j] = chosenNum;
        }
        document.write(matrixArray[i][j] + "&nbsp;&nbsp;");
    }
    document.write( "<br />");
}
document.write( "<br />");
document.write( "<br />");
/**********************************1*************************************** */
document.write("1. Сума головної діагоналі: ");
let sumPrimDiag = 0;
for (let i = 0; i < nArrayLength; i++) {           //iterate rows
    for (let j = 0; j < nArrayLength; j++ ) {      //iterate columns
        if (matrixArray[i] === matrixArray[j]) {
            sumPrimDiag += matrixArray[i][j];
        }
    }
}
document.write(sumPrimDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************2*************************************** */
document.write("2. Сума побочної діагоналі: ");

let sumSecDiag = 0;
for(let i = 0; i < nArrayLength; i++) {    //iterate rows
    for(let j = 0; j < nArrayLength; j++) {    //iterate columns
        if(i+j === nArrayLength-1) {
            sumSecDiag += matrixArray[i][j];
        }
    }
}
document.write(sumSecDiag);
document.write( "<br />");
document.write( "<br />");

/**********************************3*************************************** */
document.write("3. Сума половини матриці без головної діагоналі зверху cправа: ");
let sumOverPrimNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i < nArrayLength-1 && i !==j && i < j) {
            sumOverPrimNoDiag += matrixArray[i][j];
        }
    }
}
document.write(sumOverPrimNoDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************4*************************************** */
document.write("4. Сума половини матриці з головною діагоналлю зверху cправа: ");

let sumOverPrimDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i < nArrayLength && i <= j) {
            sumOverPrimDiag += matrixArray[i][j];
        }
    }
}
document.write(sumOverPrimDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************5*************************************** */
document.write("5. Сума половини матриці без головної діагоналі знизу зліва: ");

let sumUnderPrimNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j < nArrayLength && j < i) {
            sumUnderPrimNoDiag += matrixArray[i][j];
        }
    }
} 
document.write(sumUnderPrimNoDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************6*************************************** */
document.write("6. Сума половини матриці з головною діагоналлю знизу зліва: ");

let sumUnderPrimDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j < nArrayLength && j <= i) {
            sumUnderPrimDiag += matrixArray[i][j];
        }
    }
}
document.write(sumUnderPrimDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************7*************************************** */
document.write("7. Сума половини матриці без побічної діагоналі зверху зліва: ");

let sumOverSecNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j < nArrayLength-1) {
            sumOverSecNoDiag += matrixArray[i][j];
        }
    }
}
document.write(sumOverSecNoDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************8*************************************** */
document.write("8. Сума половини матриці з побочною діагоналлю зверху зліва: ");

let sumOverSecDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j < nArrayLength) {
            sumOverSecDiag += matrixArray[i][j];
        }
    }
}
document.write(sumOverSecDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************9*************************************** */
document.write("9. Сума половини матриці без побічної діагоналі внизу cправа: ");

let sumUnderSecNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j > nArrayLength - 1) {
            sumUnderSecNoDiag += matrixArray[i][j];
        }
    }
}
document.write(sumUnderSecNoDiag);
document.write( "<br />");
document.write( "<br />");
/**********************************10*************************************** */
document.write("10. Сума рядкa с: ");

let sumGivenRow = 0;
for(let i = 0; i < nArrayLength; i++) {
    for (let j = 0; j < nArrayLength; j++) {
        if(i === rowIndex) {
            sumGivenRow += matrixArray[i][j];
        }
    }
}
document.write(sumGivenRow);
document.write( "<br />");
document.write( "<br />");
/**********************************11*************************************** */
document.write("11. Сума стовпця k: ");

let sumGivenCol = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j === colIndex) {
            sumGivenCol += matrixArray[i][j];
        }
    }
}
document.write(sumGivenCol);
document.write( "<br />");
document.write( "<br />");