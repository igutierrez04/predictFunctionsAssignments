function MyBirthYearFun(){
    console.log("I was born in " + 1980);
} // it will combine the string and the numeric value into one 

MyBirthYearFun()

function MyBirthYearFunc(birthYearInput){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
} // error, since birthYearInput is not defined

MyBirthYearFunc(birthYearInput)

function add(num1, num2){
    console.log("Summing Numers!")
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
} // it will print the addition of num1 and num2, as well as what each one of them are, and the first string
add(4,7)