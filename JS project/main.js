let level = 1;
let min = 0;
let sec = 0;
let interval = null;
let operators = ['+', '-', '*', '/', '%'];
let fNumber;
let lNumber;
let selectedOperator;
let answerData = [];
let corectAnswer;
let insertAnswer;
let qNumber = 0;

// if we click everytime ine start button

const selectElement = document.getElementById('level-select');
const selectSec = document.getElementById('sec');
const selectMin = document.getElementById('min');
const selectfNumber = document.getElementById('f-number');//we ass
const selectlNumber = document.getElementById('l-number');
const selectOperator = document.getElementById('operator');
const selectAnswer = document.getElementById('answer');
const selectQuestion = document.getElementById('question');
const selectCorrctAnswer = document.getElementById('c');
const selectWrongAnswer = document.getElementById('w');
const selectSkippedAnswer = document.getElementById('s');
const selectStart = document.getElementById('btn-start');
const selectTBody = document.getElementById('t-body');

selectElement.addEventListener("change", function(){
    level = parseInt(selectElement.value);  //it parse to the number, value also given in htmnl code
});

const start = ()=>{
    manageTime();
    selectStart.disabled = true;

}

const manageTime = ()=>{

    qNumber++;

    if (qNumber>10) {
        finalize();
        return;
        
    }else{
        selectQuestion.textContent = qNumber;
    
    min = 0;
    sec = 0;
    selectMin.textContent = '00';
    selectSec.textContent = '00';
    clearInterval(interval);
    generateQuestion(level);


    interval = setInterval(()=>{

        sec++;
        if(sec<10){
            selectSec.textContent = '0'+sec;
        }else{
            selectSec.textContent = sec+'';
        }
        if(sec==60){
            sec=0;
            min++;
            selectMin.textContent = '0'+min;
        }
        if(min==3){
            min = 0;
            // implement
        }

    }, 1000 );

    }

    
}


const generateQuestion = (selectedLevel)=>{

    let maxNumber = 10;

    if(selectedLevel==2){
        maxNumber = 50;
    }else if(selectedLevel==3){
        maxNumber = 100;
    }

    fNumber = Math.floor(Math.random() * maxNumber) + 1;
    lNumber = Math.floor(Math.random() * maxNumber) + 1;

    selectfNumber.textContent = fNumber;
    selectlNumber.textContent = lNumber;

    selectedOperator = operators[
        Math.floor(Math.random()*5)  //come 0 to 4 numbers
    ];

    selectOperator.textContent = selectedOperator;   

    // first we{ take random number and it assign to the html value
}

const submitData = ()=>{
   

     insertAnswer = parseInt(selectAnswer.value);
   

    if(fNumber && lNumber && selectedOperator && insertAnswer){
        
        switch (selectedOperator) {
            case '+': corectAnswer = fNumber + lNumber; 
              break;

            case '-': corectAnswer = fNumber - lNumber; 
             break;

            case '*': corectAnswer = fNumber * lNumber; 
             break;

            case '/': corectAnswer = fNumber / lNumber; 
               break;

            case '%': corectAnswer = fNumber % lNumber; 
               break;
        
            default: alert('something went wrong');
                return;
        }

        if (insertAnswer==corectAnswer) {
            let obj={
                'qnumber': 1,
                'time': min+ ":"+sec,
                'correctAnswer': corectAnswer,
                'userAnswer': insertAnswer,
                'operators': selectedOperator,
                'firstNumber': fNumber,
                'lastNumber': lNumber,
                'isCorrect':true,
                'skippedAnswer': false
            }
            answerData.push(obj);

            
        }else{
            let obj={
                'qnumber': 1,
                'time': min+ ":"+sec,
                'correctAnswer': corectAnswer,
                'userAnswer': insertAnswer,
                'operators': selectedOperator,
                'firstNumber': fNumber,
                'lastNumber': lNumber,
                'isCorrect':false, 
                'skippedAnswer': false
            }
            answerData.push(obj);
        }   

        manageTime();
        checkAnswerIsCorrect();
       

    }else{
        alert('try again');
    }
}
const skippedAnswer = ()=>{

     let obj={
                'qnumber': 1,
                'time': min+ ":"+sec,
                'correctAnswer': corectAnswer,
                'userAnswer': insertAnswer,
                'operators': selectedOperator,
                'firstNumber': fNumber,
                'lastNumber': lNumber,
                'isCorrect':false, 
                'skippedAnswer': true
            }
            answerData.push(obj);
            manageTime();
            checkAnswerIsCorrect();
            console.log(answerData);    
}

const checkAnswerIsCorrect = () => {
    let c = 0;
    let w = 0;
    let s = 0;

    for (let x = 0; x < answerData.length; x++) {
        let temp = answerData[x];

        if (temp.isCorrect) {
            c++;
        } else {
            w++;
        }

        if (temp.skippedAnswer) {
            s++;
        }
    }

    // Move the following lines outside the loop
    selectCorrctAnswer.textContent = c;
    selectWrongAnswer.textContent = w;
    selectSkippedAnswer.textContent = s;
}

const resetData = ()=>{
    selectStart.disabled = false;
    manageTime();
    checkAnswerIsCorrect();
    qNumber = 0;
    selectQuestion.textContent = qNumber;
    clearInterval(interval);



}

const finalize = () => {
    answerData.forEach(temp => { // Change 'data' to 'temp'
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = temp.firstNumber;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = temp.lastNumber;
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = temp.operators;
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        cell4.textContent = temp.correctAnswer;
        row.appendChild(cell4);

        const cell5 = document.createElement("td");
        cell5.textContent = temp.userAnswer;
        row.appendChild(cell5);

        const cell6 = document.createElement("td");
        cell6.textContent = temp.isCorrect;
        row.appendChild(cell6);

        const cell7 = document.createElement("td");
        cell7.textContent = temp.skippedAnswer;
        row.appendChild(cell7);

        const cell8 = document.createElement("td");
        cell8.textContent = temp.time;
        row.appendChild(cell8);

        selectTBody.appendChild(row);
    });

    // Clear the answerData array after finalizing
    answerData = [];
};




