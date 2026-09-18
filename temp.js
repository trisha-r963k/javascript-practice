let temp = 15;

function checktemp() {

if (temp<20) {
    console.log("cold");
}
else if (temp>=20 && temp<=30) {
    console.log("Normal");
}
else  {
    console.log("Hot");
}; 
};

checktemp();