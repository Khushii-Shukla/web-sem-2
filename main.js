function checkNumber() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
    }
    else if (num % 2 === 0) {
        result.innerHTML = num + " is an Even Number";
    }
    else {
        result.innerHTML = num + " is an Odd Number";
    }
}