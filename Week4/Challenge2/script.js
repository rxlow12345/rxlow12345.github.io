// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
//addEventListener()
var button = document.getElementById("justin-btn");
button.addEventListener("mouseover", func1);

function func1(){
    //when mouse over
    let result_div = document.getElementById("result");
    result_div.style.backgroundColor = "Pink";
    result_div.style.color = 'blue';
    result_div.innerText = 'Welcome To My Heart';
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
button.addEventListener("mouseout", func2);

function func2(){
    //Called when user mouses out
    let result_div = document.getElementById('result');
    result_div.style.backgroundColor = 'black';
    result_div.style.color = 'red';
    result_div.innerText = "Don't Leave My Heart";
}