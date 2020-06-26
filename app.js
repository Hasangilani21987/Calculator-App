function clearResult () {
    var result = document.getElementById("result");
    result.value = "0";
}

function getnumber (num) {
    console.log(num)
    var result = document.getElementById("result");
    if (result.value === '0') {
        result.value = ""
        result.value += num
    } else {
        result.value += num
    }
    
}

function evaluateResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)   
}