/* Factorial

Write a recursive function that finds the factorial of a given number.
The factorial can be found by multiplying that number by each number
between itself and 1.
For example, the factorial of 5 is:
5 * 4 * 3 * 2 * 1 = 120
 */

const factorial = function(num) {
    if (num === 1) {
      return 1
    }
  
    return num * factorial(num - 1)
}
  
factorial(5)

 //skips line 11, num is 5
 //line 15: (5 * (5-1)) = 5 * 4 = 20


 //skips line 11, num is 4
 //line 15: (20 * (4-1)) = 20 * 3 = 60

 //skips line 11, num is 3
 //line 15: (60 * (3-1)) = 60 * 2 = 120

 //skips line 11, num is 2
 //line 15: (120 * (2-1)) = 120 * 1 = 120

 //line 11: num === 1, returns 1

 //python tutor version:
 //forward phase
 //num 5
 //5 - 1 = 4, num 4
 //4 - 1 = 3, num 3
 //3 - 1 = 2, num 2
 //2 - 1 = 1, num 1 => return 1 per line 12 (return val)

 //backward phase
 //return val 1 X num 2 = 2 (return val)
 //return val 2 X num 3 = 6 (return val)
 //return val 6 X num 4 = 24 (return val)
 //return val 24 X num 5 = 120

//visualize execution: http://pythontutor.com/javascript.html#code=const%20factorial%20%3D%20function%28num%29%20%7B%0A%20%20%20%20if%20%28num%20%3D%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20return%201%0A%20%20%20%20%7D%0A%20%20%0A%20%20%20%20return%20num%20*%20factorial%28num%20-%201%29%0A%7D%0A%20%20%0Aconsole.log%28factorial%285%29%29%3B&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D