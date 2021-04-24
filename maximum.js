let num1=parseInt(prompt("Enter first number:"))
let num2=parseInt(prompt("Enter second number:"))
switch (true) {
    case (num1>num2):
        console.log(num1+" is greater");
        break;
    case (num1<num2):
        console.log(num2+" is greater");
        break;
    case (num1==num2):
        console.log("Both are EQUAL");
        break;

    default:
        console.log("Enter valid input");
        break;
}