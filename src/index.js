
let today = Date();
let todayString = Date.now();
console.log(today);
console.log(todayString);
const todayDisplayer = document.getElementById('today-displayer');
todayDisplayer.textContent = today;
const todayTimestampDisplayer = document.getElementById('today-tumestamp-displayer');
todayTimestampDisplayer.textContent = todayString;
const anneeTimestamp = 1000*60*60*24*365;
const mois30Timestamp = 1000*60*60*24*30;
const mois31Timestamp = 1000*60*60*24*31;
const semaineTimestamp = 1000*60*60*24*7;
const jourTimestamp = 1000*60*60*24;
const heureTimestamp = 1000*60*60;
const minuteTimestamp = 1000*60;



// console.log(toISOString(today));

//we get existing html elements
const mainContainer = document.getElementById('main-container');
const birthDateForm = document.getElementById('birth-date-form');
const birthDateInput = document.getElementById('birth-date-input');
const submitButton = document.getElementById('submit-button');

//we will create new html elements
const answerDiv = document.createElement('div');
const answerPara = document.createElement('p');
const answerSpan = document.createElement('span');
const dateStringPara = document.createElement('p');
const dateStringSpan = document.createElement('span');
const ageCalculatedPara = document.createElement('p');
const ageCalculatedSpan = document.createElement('span');
const ageDetailedPara = document.createElement('p');
const ageDetailedSpan  = document.createElement('span');
const ageMonthDetailedSpan = document.createElement('span');


function createHtml() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}
function createCalculatorDiv() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}

//we watch for form submitions
birthDateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (birthDateInput.value != "") {
        createHtml();
        answerBlock = mainContainer.append(answerDiv);
        answerDiv.appendChild(answerPara);
        answerPara.textContent = ("Vous êtes né le: ");
        answerPara.appendChild(answerSpan);
        var yourBirthDate = birthDateInput.value;

        let yourBirthDateObject = new Date(yourBirthDate);
        console.log(yourBirthDate);
        console.log(yourBirthDateObject);
        let yourBirthDateTimeString = Date.parse(yourBirthDate);
        console.log(yourBirthDateTimeString);

        answerSpan.textContent = (yourBirthDate);
        answerDiv.appendChild(dateStringPara);
        dateStringPara.textContent = ("Votre date de naissance en mode timestamp: ");
        dateStringPara.append(dateStringSpan);
        dateStringSpan.textContent = yourBirthDateTimeString;
        var yourAgeCalculated = todayString - yourBirthDateTimeString;

        answerDiv.appendChild(ageCalculatedPara);
        ageCalculatedPara.textContent = ("Votre âge à l'instant t en mode timestamp: ");
        ageCalculatedPara.appendChild(ageCalculatedSpan);
        ageCalculatedSpan.textContent = (yourAgeCalculated);

        

        console.log(yourAgeCalculated);

                // const anneeTimestamp = 1000*60*24*365;525600000
                // const mois30Timestamp = 1000*60*24*30;43200000
                // const mois31Timestamp = 1000*60*24*31;44640000
                // const semaineTimestamp = 1000*60*24*7;10080000
                // const jourTimestamp = 1000*60*24;1440000
                // const heureTimestamp = 1000*60;60000
                // const minuteTimestamp = 1000;

                var yourAgeYear = Math.trunc(yourAgeCalculated / anneeTimestamp);
                var yourAgeYearModulo = yourAgeCalculated % anneeTimestamp;
                var yourAgeMonth = Math.trunc(yourAgeYearModulo / mois30Timestamp);
                console.log(yourAgeYear);
                console.log(yourAgeMonth);

        answerDiv.append(ageDetailedPara);
        ageDetailedPara.textContent = ("Vous avez ");
        ageDetailedPara.appendChild(ageDetailedSpan);
        ageDetailedSpan.textContent = (yourAgeYear + " ans");
        ageDetailedPara.appendChild(ageMonthDetailedSpan);
        ageMonthDetailedSpan.textContent = (" et " + yourAgeMonth + " mois");
        
        var birthYear = yourBirthDateObject.getUTCFullYear();
        var birthMonth = yourBirthDateObject.getUTCMonth();
        var birthDay = yourBirthDateObject.getUTCDay();
        console.log(birthYear);
        console.log(birthMonth);
        console.log(birthDay);

        function isBissextile(birthYear) {
            if(birthYear % 4 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        console.log(isBissextile(birthYear));

        
        function is31j(birthMonth) {
            if (birthMonth === 0 || birthMonth ===2 || birthMonth ===4 || birthMonth ===6 || birthMonth ===7 || birthMonth ===9 || birthMonth ===11) {
                return true;
            }
            else {
                return false;
            }
        }
        console.log(is31j(birthMonth));

        function isBissextileFebruary(birthYear, birthMonth) {
            if (isBissextile(birthYear) && birthMonth ===1) {
                return true;
            }
            else {
                return false;
            }
        }
        console.log(isBissextileFebruary(birthYear, birthMonth));
        
        
        if (isBissextile(birthYear)) {
            console.log('bissextile');
        }
        else {
            console.log ('pas bissextile');
        }
        
        if (is31j(birthMonth)) {
            console.log('31 jours');
        }
        else {
            console.log ('pas 31j');
        }
        
        function daysThisMonth(birthYear, birthMonth) {
            if (isBissextile(birthYear) && (is31j(birthMonth))) {
                return 31;
            } 
            if (isBissextile(birthYear) && (birthMonth === 1)) {
                return 28;
            }
            else {
                return 30;
            }
        }
        console.log(daysThisMonth(birthYear, birthMonth));
        
        
    }
    else {
        createHtml();
        answerPara.textContent = ("Il faut saisir une date");
        
    }
})