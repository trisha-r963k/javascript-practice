let temp = 25;
let city = "Guwahati";

function checkTemperature() {

     if (temp<10) {
        console.log(city + ":Very cold");
    }

    else if (temp>=10 && temp<20) {
        console.log(city + ":Cold");
    }

    else if (temp>=20 && temp<=30) {
        console.log(city + ":Normal");
    }

    else {
        console.log(city + ":Hot");
    }
}

checkTemperature();