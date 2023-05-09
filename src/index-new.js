//We declare today as a Date object, set it to midnight to avoid issues
//and convert it for future needs
let today = new Date();
today.setHours(2, 0, 0, 0);
let todayString = Date.parse(today);
todayDate = today.toDateString();

//We display today date
const todayDisplayer = document.getElementById('today-displayer');
todayDisplayer.textContent = todayDate;
const todayTimestampDisplayer = document.getElementById('today-timestamp-displayer');
todayTimestampDisplayer.textContent = todayString;

//we get existing html elements
const mainContainer = document.getElementById('main-container');
const birthDateForm = document.getElementById('birth-date-form');
const birthDateInput = document.getElementById('birth-date-input');
const submitButton = document.getElementById('submit-button');

//we will create new html elements
const answerDiv = document.createElement('div');
answerDiv.id = ('answer-div');
const answerPara = document.createElement('p');
const answerSpan = document.createElement('span');
const dateStringPara = document.createElement('p');
const dateStringSpan = document.createElement('span');
const ageCalculatedPara = document.createElement('p');
const ageCalculatedSpan = document.createElement('span');
const ageDetailedPara = document.createElement('p');
const ageDetailedSpan  = document.createElement('span')
ageDetailedSpan.id = ('bloc-annees');
const ageMonthDetailedSpan = document.createElement('span');
const ageWeeksDetailedSpan = document.createElement('span');
const ageDaysDetailedSpan = document.createElement('span');
const ageHoursDetailedSpan = document.createElement('span');
const ageMinutesDetailedSpan = document.createElement('span');


//for easily adding our content
function createHtml() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}
function createCalculatorDiv() {
    answerBlock = mainContainer.append(answerDiv);
    answerDiv.appendChild(answerPara);
}

//We give a rule to know if a year is bissextile or not
function isBissextile(birthYear) {
    if(birthYear % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//We give a rule to indicate which month are 31 days long
function is31d(birthMonth, birthYear) {
    if (birthMonth === 0 || birthMonth ===2 || birthMonth ===4 || birthMonth ===6 || birthMonth ===7 || birthMonth ===9 || birthMonth ===11) {
        return true;
    }

    // const daysInAMonth = [31,isBissextile(birthYear) ? 29 : 28,31,30,31,30,31,31,30,31,30,31];
    // let days = daysInAMonth[birthMonth - 1 ];
    else {
        return false;
    }
}
//This function indicates us how much days in a month, depending of the month and the year
function daysThisMonth(birthYear, birthMonth) {
    if (isBissextile(birthYear) && (is31d(birthMonth))) {
        return 31;
    } 
    else if (isBissextile(birthYear) && (birthMonth === 1)) {
        return 29;
    }
    else if (!isBissextile(birthYear) && (birthMonth === 1)) {
        return 28;
    }
    else {
        return 30;
    }
}

//This is the function which calculate your age
function ageCalcul(yourBirthDate) {
    createHtml();
        answerBlock = mainContainer.append(answerDiv);
        answerDiv.appendChild(answerPara);
        answerPara.textContent = ("Vous êtes né le: ");
        answerPara.appendChild(answerSpan);
        var yourBirthDate = birthDateInput.value;
        //we get the birth date of the input and convert it to an object to compare it with today date object 
        let yourBirthDateObject = new Date(yourBirthDate);
        let yourBirthDateTimeStamp = Date.parse(yourBirthDate);
        let yourBirthDateShortDate = yourBirthDateObject.toDateString();
        //We display submited birth date
        answerSpan.textContent = (yourBirthDateShortDate);
        answerDiv.appendChild(dateStringPara);
        dateStringPara.textContent = ("Votre date de naissance en mode timestamp: ");
        dateStringPara.append(dateStringSpan);
        dateStringSpan.textContent = yourBirthDateTimeStamp;

        //Only for fun, let's calculate and display our age in timestamp
        var yourAgeCalculated = todayString - yourBirthDateTimeStamp;

        answerDiv.appendChild(ageCalculatedPara);
        ageCalculatedPara.textContent = ("Votre âge à l'instant t en mode timestamp: ");
        ageCalculatedPara.appendChild(ageCalculatedSpan);
        ageCalculatedSpan.textContent = (yourAgeCalculated);

        //Now we get every part of the birth date (years month, day)...
        var birthYear = yourBirthDateObject.getUTCFullYear();
        var birthMonth = yourBirthDateObject.getUTCMonth();
        var birthDay = yourBirthDateObject.getUTCDate();
    
        //We also get every part of today date to compare it
        var todayDateObject = new Date();
        var todayYear = todayDateObject.getUTCFullYear();
        var todayMonth = todayDateObject.getUTCMonth();
        var todayDay = todayDateObject.getUTCDate();
        //We define last month because we may need to know how long it was
        var lastMonth = todayMonth - 1;

        
        //if your birthday is later this year, so we can substract 1 more year while substracting today year and birth year
        if (todayMonth < birthMonth) {
            var ageYearsOld = todayYear - birthYear - 1;
            var yourAgeMonthOld = 12 - (birthMonth - todayMonth);
            
        }
        else if (todayMonth == birthMonth && todayDay <= birthDay) {
            console.log('ici');
            var ageYearsOld = todayYear - birthYear - 1;
            var yourAgeMonthOld = 11;
            
        }
        else {
            console.log("go");
            var ageYearsOld = todayYear - birthYear;
            var yourAgeMonthOld = todayMonth - birthMonth;
        }
        //if birth day number is inferior to today, so we got to know how long was last month
        //to calculate how many days to obtain same day number than today day
        
        if (todayDay < birthDay) {
            console.log("go");
            if (isBissextile(todayYear) && (todayMonth === 1)) {
                console.log("go");
                var yourAgeDaysOld = 29 - birthDay + todayDay;
                console.log("go");
            }
            else if (isBissextile(todayYear = false) && (todayMonth === 1)) {
                console.log("go");
                var yourAgeDaysOld = 28 - birthDay + todayDay;
            }
            else {
                var yourAgeDaysOld = daysThisMonth(lastMonth, todayYear) - birthDay + todayDay;
                //if today day is inferior than birth day, we must substract 1 month 
                yourAgeMonthOld -= 1;
            console.log(daysThisMonth(lastMonth, todayYear) - todayDay);
            }            
        }//if not, we only substract days
        else {
            yourAgeDaysOld = todayDay - birthDay;
        }

        //now we know how much days old we are, we can know how much weeks this year
        //and modulo gives us how many days in this week
        var yourAgeWeeksOld = Math.trunc(yourAgeDaysOld / 7);
        var yourAgeDaysOldEnd = yourAgeDaysOld % 7;
        
        //Now we only need to display
        
        
        
        answerDiv.append(ageDetailedPara);
        ageDetailedPara.textContent = ("Vous avez ");
        ageDetailedPara.appendChild(ageDetailedSpan);
        ageDetailedSpan.id = ('years-block');
        ageDetailedPara.appendChild(ageMonthDetailedSpan);
        ageMonthDetailedSpan.id = ('months-block');
        // ageMonthDetailedSpan.textContent = (" et " + yourAgeMonthOld + " mois ");
        ageDetailedPara.appendChild(ageWeeksDetailedSpan);
        ageWeeksDetailedSpan.id = ('weeks-block');
        // ageWeeksDetailedSpan.textContent = (yourAgeWeeksOld + " semaines ");
        ageDetailedPara.appendChild(ageDaysDetailedSpan);
        ageDaysDetailedSpan.id = ('days-block');
// ageDaysDetailedSpan.textContent = (yourAgeDaysOldEnd + " jours ");


        const place = document.getElementById('years-block');
        const place2 = document.getElementById('months-block');
        const place3 = document.getElementById('weeks-block');
        const place4 = document.getElementById('days-block');
        console.log(ageYearsOld);
        
        // function pause(time) {
            //     setTimeout(pause, time);
            // }
            
        var n = ageYearsOld;
        var o = yourAgeMonthOld;
        console.log(o);
        var p = yourAgeWeeksOld;
        var q = yourAgeDaysOld;
        let cpt1 = 0;
        let cpt2 = 0;
        let cpt3 = 0;
        let cpt4 = 0;
        var duree = 3;
        var delta = Math.ceil((duree * 1000) / n);
        var delta2 = Math.ceil((duree * 1200) / o);
        var delta3 = Math.ceil((duree * 1400) / p);
        var delta4 = Math.ceil((duree * 1600) / q);
        
        
        function countdown1 () {
            console.log('boucle 1');
            place.innerHTML = ++cpt1 + " ans ";
            if(cpt1 < ageYearsOld) {
                setTimeout(countdown1, delta);
            }
        }
        countdown1();
        
        function countdown2 () {
            console.log('boucle 2');
            place2.innerHTML = ++cpt2 + " mois  ";
            if(cpt2 < o) {
                setTimeout(countdown2, delta2);
            }
        }
        countdown2();
        
        function countdown3 () {
            console.log('boucle 3');
            place3.innerHTML = ++cpt3 + " semaines et ";
            if(cpt3 < p) {
                setTimeout(countdown3, delta3);
            }
        }
        countdown3();

        console.log('boucle 4');
        function countdown4 () {
            place4.innerHTML = ++cpt4 + " jours";
            if(cpt4 < q) {
                setTimeout(countdown4, delta4);
            }
        }
        countdown4();
        
        
        
        //     myElement = (i);
        //     if (i < ageYearsOld) {
        //         console.log('ici');
        //         pause(1000);
        //         i++;
        //         myElement = (i);
        //         setTimeout(textRoller, 1000);
        //         // textRoller((elementToType - i), place);
        //         console.log('passage boucle');
        //         textRoller(ageYearsOld, ageDetailedSpan);
        //     }
        //     else {
        //         console.log('finito');
        //     }

        // }

        // textRoller(ageYearsOld, ageDetailedSpan);

        // function typeWriter(elementToType, place) {
        //         for (let i = 0; i < elementToType; i++) {
        //                 console.log(i);
        //                 place.textContent = (i);
        //                 setTimeout(typeWriter, 10000);
        //             } 
        //         }
                
                // for (i = 0;i < ageYearsOld.toString.length; i++) {
                    
                //     setTimeout(function () {
                //         ageDetailedSpan.textContent = (i);
                //         console.log(i);
                //         i++;
                //         console.log(i);
                //     }, 100); 
                //    };






          

}


//if not empty or today date or future date,
//form submition will launch the ageCalcul function
birthDateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let yourBirthDateTimeStamp = Date.parse(birthDateInput.value);
    if (birthDateInput.value == "") {
    console.log(birthDateInput.value);

        createHtml();
        answerPara.textContent = ("Il faut saisir une date valide");
    }
    else if (todayString === yourBirthDateTimeStamp){
        createHtml();
        answerPara.textContent = ("Il faut saisir une autre date que celle du jour");
    }
    else if (todayString < yourBirthDateTimeStamp){
        createHtml();
        answerPara.textContent = ("Cette date est dans le futur !");
    }
    
    else {
    console.log(birthDateInput.value);

        ageCalcul(birthDateInput.value);
        
    }
})
