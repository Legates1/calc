
let sum = document.getElementById("sum-el")
let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")
    
    function add(){
        var x = Number(num1.value)
        var y = Number(num2.value)
        let result = x + y
        sum.textContent = "Sum: " + result
    }
    
    function subtract(){
        var x = Number(num1.value)
        var y = Number(num2.value)
        let result = x - y
        sum.textContent = "Sum: " + result
    }

    function divide(){
        var x = Number(num1.value)
        var y = Number(num2.value)
        let result = x / y
        sum.textContent = "Sum: " + result
    }

    function multiply(){
        var x = Number(num1.value)
        var y = Number(num2.value)
        let result = x * y
        sum.textContent = "Sum: " + result
    }
