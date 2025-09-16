function calculate() {

    // YOUR CODE GOES HERE
    console.log("calculate func");

    let num1 = document.getElementById("number1").value;
    num1 = Number(num1);
    let num2 = document.getElementById("number2").value;
    num2 = Number(num2);

    let sum = 0;
    for (i=num1; i<=num2; i++)
        sum += i;

    document.getElementById("result").innerText = "The sum is: " + sum;
}