let today = new Date();
today.setHours(2, 0, 0, 0)
let todayString = Date.parse(today);
console.log(todayString);


const todayDisplayer = document.getElementById('today-displayer');
todayDisplayer.textContent = today;
const todayTimestampDisplayer = document.getElementById('today-tumestamp-displayer');
todayTimestampDisplayer.textContent = todayString;

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
const ageWeeksDetailedSpan = document.createElement('span');
const ageDaysDetailedSpan = document.createElement('span');
const ageHoursDetailedSpan = document.createElement('span');
const ageMinutesDetailedSpan = document.createElement('span');



function createHtml() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}
function createCalculatorDiv() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}

function isBissextile(birthYear) {
    if(birthYear % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function is31j(birthMonth) {
    if (birthMonth === 0 || birthMonth ===2 || birthMonth ===4 || birthMonth ===6 || birthMonth ===7 || birthMonth ===9 || birthMonth ===11) {
        return true;
    }
    else {
        return false;
    }
}

function isBissextileFebruary(birthYear, birthMonth) {
    if (isBissextile(birthYear) && birthMonth ===1) {
        return true;
    }
    else {
        return false;
    }
}
function daysThisMonth(birthYear, birthMonth) {
    if (isBissextile(birthYear) && (is31j(birthMonth))) {
        return 31;
    } 
    if (isBissextile(birthYear) && (birthMonth === 1)) {
        return 29;
    }
    if (isBissextile(birthYear = false) && (birthMonth === 1)) {
        return 28;
    }
    else {
        return 30;
    }
}


function ageCalcul(yourBirthDate) {
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

        var birthYear = yourBirthDateObject.getUTCFullYear();
        var birthMonth = yourBirthDateObject.getUTCMonth();
        var birthDay = yourBirthDateObject.getUTCDate();
        console.log(birthYear);
        console.log(birthMonth);
        console.log(birthDay);
    

        var todayDateObject = new Date();
        var todayYear = todayDateObject.getUTCFullYear();
        var todayMonth = todayDateObject.getUTCMonth();
        var lastMonth = todayMonth - 1;
        var todayDay = todayDateObject.getUTCDate();
        console.log(todayYear);
        console.log(todayMonth);
        console.log(todayDay);

        if (todayDay > daysThisMonth(todayMonth)) {
            e.preventDefault();
            console.log('bizarre');
        }

        if (todayMonth < birthMonth) {
            var ageYearsOld = todayYear - birthYear - 1;
            var yourAgeMonthOld = 12 - todayMonth;
            
        }
        else {
            console.log("go");
            var ageYearsOld = todayYear - birthYear;
            var yourAgeMonthOld = todayMonth - birthMonth;
        }

        if (todayDay < birthDay) {
            console.log("go");
            if (isBissextile(todayYear) && (todayMonth === 1)) {
                console.log("go");
                var yourAgeDaysOld = 29 - birthDay + todayDay;
                console.log("go");
            }
            if (isBissextile(todayYear = false) && (todayMonth === 1)) {
                console.log("go");
                var yourAgeDaysOld = 28 - birthDay + todayDay;
            }
            else {
                var yourAgeDaysOld = daysThisMonth(lastMonth, todayYear) - birthDay + todayDay;
            console.log(daysThisMonth(lastMonth, todayYear) - todayDay);
            }
            
        }
        else {
            yourAgeDaysOld = todayDay - birthDay;
            
            
        }
        var yourAgeWeeksOld = Math.trunc(yourAgeDaysOld / 7);
        var yourAgeDaysOldEnd = yourAgeDaysOld % 7;
        
        console.log(ageYearsOld);
        console.log(yourAgeMonthOld);
        console.log(yourAgeDaysOld);

        answerDiv.append(ageDetailedPara);
        ageDetailedPara.textContent = ("Vous avez ");
        ageDetailedPara.appendChild(ageDetailedSpan);
        ageDetailedSpan.textContent = (ageYearsOld + " ans");
        ageDetailedPara.appendChild(ageMonthDetailedSpan);
        ageMonthDetailedSpan.textContent = (" et " + yourAgeMonthOld + " mois ");
        ageDetailedPara.appendChild(ageWeeksDetailedSpan);
        ageWeeksDetailedSpan.textContent = (yourAgeWeeksOld + " semaines ");
        ageDetailedPara.appendChild(ageDaysDetailedSpan);
        ageDaysDetailedSpan.textContent = (yourAgeDaysOldEnd + " jours ");
        ageDetailedPara.appendChild(ageHoursDetailedSpan);

}


//we watch for form submitions
birthDateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let yourBirthDateTimeString = Date.parse(birthDateInput.value);
    if (birthDateInput.value == "") {
    console.log(birthDateInput.value);

        createHtml();
        answerPara.textContent = ("Il faut saisir une date");
    }


    else if (todayString === yourBirthDateTimeString){
        createHtml();
        answerPara.textContent = ("Il faut saisir une autre date que celle du jour");
    }
    else if (todayString < yourBirthDateTimeString){
        createHtml();
        answerPara.textContent = ("Vous êtes né dans le futur ???");
    }
    else {
    console.log(birthDateInput.value);

        ageCalcul(birthDateInput.value);
        
    }
})

function errorBuster() {
    // var birthYear = yourBirthDateObject.getUTCFullYear();
    //     var birthMonth = yourBirthDateObject.getUTCMonth();
    //     var birthDay = yourBirthDateObject.getUTCDate();
    console.log(birthYear);
    console.log(birthYear);

    if (birthYear > todayYear) {
        console.log("vu")
    }



}