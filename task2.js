let temp = 25;

function checkTemperature(temp) {
    if (temp < 20){
        console.log("Cold");
    }
    else if (temp >= 20 && temp <= 30){
        console.log("Normal");
    }
    else{
        console.log("Hot");
    }
}

checkTemperature(temp);