let marks = 100;
let attendance = 85;
let name = "Radha";

function checkResults() {

    if (marks >=90 && attendance >=75) {
        console.log(name + ":Excellent");
    }

    else if (marks >=60 && attendance >=75) {
        console,log(name + ":Pass");
    }

    else if (marks >=40 && attendance >=75) {
        console.log(name + ":Pass but needs improvement"); 
    }

    else if (attendance <75) {
        console.log(name + ":not eligible due to low attendance");
    }

    else {
        console.log(name + ":Fail");
    }
}

checkResults();