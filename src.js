const dayNum = document.getElementById("day-num");
const monthNum = document.getElementById("month-num");
const yearNum = document.getElementById("year-num");
const warring = document.getElementsByClassName("warring");
const brYear = document.getElementById("br-year");
const brMonth = document.getElementById("br-month");
const brDay = document.getElementById("br-day");

let nDate = new Date();
let nYear = nDate.getFullYear();
let nMonth = nDate.getMonth() + 1;
let nDay = nDate.getDate();



let enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", function (e) {
    let day = dayNum.value;
    let month = monthNum.value;
    let year = yearNum.value;

    function checkDay() {
        if (day > 0 && day <= 31) {

            return true;
        }
        else {
            warring[0].textContent = "Day is not valid";


            return false;


        }
    }

    function checkMonth() {
        if (month > 0 && month < 13) {
            return true;
        } else {

            warring[1].textContent = "Month is not valid";
            return false;
        }
    }

    function checkYear() {
        if (year > 0 && year <= 9999) {
            return true;
        } else {
            warring[3].textContent = "Year is not valid";

            return false;
        }
    }

    if (checkDay() && checkMonth() && checkYear()) {
        if (day >= nDay) {
            month = month - 1;

        }

        if (month >= nMonth) {
            year = year - 1;
        }
        let ageYear = nYear - year;
        let ageMonth = nMonth - month - 1;
        let ageDay = nDay - day;

        ageDay = Math.abs(ageDay);
        ageMonth = Math.abs(ageMonth);
        ageYear = Math.abs(ageYear);

        brYear.textContent = ageYear;
        brMonth.textContent = ageMonth;
        brDay.textContent = ageDay;











    }
    else {
        alert("Date is not valid");
    }




});


