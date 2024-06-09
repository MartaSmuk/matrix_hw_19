"use strict";

let nArrayLength = +prompt("Please enter the size of the Matrix");

while (nArrayLength < 1 || isNaN(nArrayLength)) {
    nArrayLength = +prompt("Please enter the size of the Matrix");
}

let chosenNum = +prompt("Please enter the number you want to add to the right corner of the matrix");
while (chosenNum < 1 || isNaN(chosenNum)) {
    chosenNum = +prompt("Please enter the number you want to add to the right corner of the matrix");
}

let chosenRowInd = +prompt("Please enter the number of the row you want to find the sum of, note that the number should be smaller or equal to the size of the matrix", Math.floor(nArrayLength/2));
while (chosenRowInd < 1 || isNaN(chosenRowInd) || chosenRowInd >= nArrayLength) {
    chosenRowInd = +prompt("Please enter the number you want to add to the right corner of the matrix");
}

let chosenColInd = +prompt("Please enter the number of the col you want to find the sum of, note that the number should be smaller or equal to the size of the matrix", Math.floor(nArrayLength/2));
while (chosenColInd < 1 || isNaN(chosenColInd) || chosenColInd >= nArrayLength) {
    chosenColInd = +prompt("Please enter the number you want to add to the right corner of the matrix");
}

/*****************************Create Matrix********************************* */
document.write("Виконати з заповнення масиву випадковими числами: ");
document.write("<br/>");
document.write("<br/>");
const matrixBox = document.querySelector(".myMatrix");

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
    document.write("<br/>");
}
document.write("<br/>");
document.write("<br/>");
/**********************************1*************************************** */

//document.write(sumPrimDiag);
document.write( "<br/>");
let sumPrimDiag = 0;

document.write("<table>");   //generate table
for (let i = 0; i < nArrayLength; i++) {           //iterate rows
    document.write("<tr>");
    for (let j = 0; j < nArrayLength; j++ ) {      //iterate columns
        if (matrixArray[i] === matrixArray[j]) {
            sumPrimDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("1. Сума головної діагоналі: " + sumPrimDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************2*************************************** */
let sumSecDiag = 0;

document.write("<table>");
for(let i = 0; i < nArrayLength; i++) {    //iterate rows
    document.write("<tr>");
    for(let j = 0; j < nArrayLength; j++) {    //iterate columns
        if(i+j === nArrayLength-1) {
            sumSecDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}

document.write("</table>");
document.write("<br/>");
document.write("2. Сума побочної діагоналі: ");
document.write(sumSecDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************3*************************************** */
document.write("<table>"); 
let sumOverPrimNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    document.write("<tr>");
    for(let j = 0; j < nArrayLength; j++) {
        if(i < nArrayLength-1 && i !==j && i < j) {
            sumOverPrimNoDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write( "<br/>");
document.write("3. Сума половини матриці без головної діагоналі зверху cправа: ");
document.write(sumOverPrimNoDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************4*************************************** */

document.write("<table>"); 
let sumOverPrimDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    document.write("<tr>");
    for(let j = 0; j < nArrayLength; j++) {
        if(i < nArrayLength && i <= j) {
            sumOverPrimDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("4. Сума половини матриці з головною діагоналлю зверху cправа: ");
document.write(sumOverPrimDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************5*************************************** */

document.write("<table>"); 
let sumUnderPrimNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j < nArrayLength && j < i) {
            sumUnderPrimNoDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}

document.write("</table>");
document.write("<br/>");
document.write("5. Сума половини матриці без головної діагоналі знизу зліва: ");
document.write(sumUnderPrimNoDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************6*************************************** */

document.write("<table>"); 
let sumUnderPrimDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j < nArrayLength && j <= i) {
            sumUnderPrimDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("6. Сума половини матриці з головною діагоналлю знизу зліва: ");
document.write(sumUnderPrimDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************7*************************************** */

document.write("<table>"); 
let sumOverSecNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j < nArrayLength-1) {
            sumOverSecNoDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("7. Сума половини матриці без побічної діагоналі зверху зліва: ");
document.write(sumOverSecNoDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************8*************************************** */

document.write("<table>");
let sumOverSecDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j < nArrayLength) {
            sumOverSecDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("8. Сума половини матриці з побочною діагоналлю зверху зліва: ");
document.write(sumOverSecDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************9*************************************** */

document.write("<table>");
let sumUnderSecNoDiag = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(i+j > nArrayLength - 1) {
            sumUnderSecNoDiag += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("9. Сума половини матриці без побічної діагоналі внизу cправа: ");
document.write(sumUnderSecNoDiag);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************10*************************************** */

document.write("<table>");
let sumGivenRow = 0;
for(let i = 0; i < nArrayLength; i++) {
    for (let j = 0; j < nArrayLength; j++) {
        if(i === chosenRowInd) {
            sumGivenRow += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("10. Сума рядкa с: ");
document.write(sumGivenRow);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
/**********************************11*************************************** */

document.write("<table>");
let sumGivenCol = 0;
for(let i = 0; i < nArrayLength; i++) {
    for(let j = 0; j < nArrayLength; j++) {
        if(j === chosenColInd) {
            sumGivenCol += matrixArray[i][j];
            document.write("<td class='chosenEl'>" + matrixArray[i][j] + "</td>");
        } else {
            document.write("<td>" + matrixArray[i][j] + "</td>"); // create single cell
        }
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("11. Сума стовпця k: ");
document.write(sumGivenCol);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");