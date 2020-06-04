/*Power Calculator 
Write a function called powerCalculator() that takes two parameters, an integer as a base, 
and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0*/

const powerCalculator = function(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    if (exponent < 0) {
        return "Exponent must be >= 0."
    }
    return base * powerCalculator(base, (exponent - 1))
    
}

console.log(powerCalculator(10, 2));
//first checks if exponent is 0, it isn't, so skips
//then checks if exponent is less than 0, it isn't, so skips
//then completes exponent - 1, which is 2 - 1 = 1
//returns base of 10, new exponent of 1
//then checks again if new exponent is 0, it isn't, so skips
//then checks if new exponent is less than 0, it isn't, so skips
//then completes exponent - 1, which is now 1 - 1 = 0
//returns base of 10, exponent of 0
//then checks if exponent is 0, now it is, so returns 1 for the new exponent
//goes to final return statement of base 10 * (10 ^ 1)
//that is 10 X 10 = 100, which is = 10 ^ 2, so it's completed.
//visualize execution here: http://pythontutor.com/javascript.html#code=const%20powerCalculator%20%3D%20function%28base,%20exponent%29%20%7B%0A%20%20%20%20if%20%28exponent%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20return%201%0A%20%20%20%20%7D%0A%20%20%20%20if%20%28exponent%20%3C%200%29%20%7B%0A%20%20%20%20%20%20%20%20return%20%22Exponent%20must%20be%20%3E%3D%200.%22%0A%20%20%20%20%7D%0A%20%20%20%20return%20base%20*%20powerCalculator%28base,%20%28exponent%20-%201%29%29%0A%20%20%20%20%0A%7D%0A%0Aconsole.log%28powerCalculator%2810,%202%29%29%3B&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D