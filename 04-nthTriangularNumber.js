/*nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  
Triangular # = pattern of numbers that form equilateral triangles
each subsequent number in sequence adds new row of dots to triangle
n = number of total ROWS of dots
nth = triangular number = number of DOTS in the equilateral triangle

for n=2:
  bottom row is 2 dots, top row is 1 dot, so subspequent rows are one less dot than row beneath, or n - 1
  n = 1: row 1, 1 dot
  n = 2: row 1: 1 dot, row 2: 2 dots
  n = 3: row 1: 1 dot, row 2: 2 dots, row 3: 3 dots
  n = 4: row 1: 1 dot, row 2: 2 dots, row 3: 3 dots, row 4: 4 dots
 have to include bottom row, n in math, plus each subsequent row, which is one less than row beneath it => n-1

*/

const dotTotal = function(numRows) {
    if (numRows === 0) {
        return 0
    } else {
        return numRows + dotTotal(numRows - 1)
    }
} 

console.log(dotTotal(3))
//forward phase:
//numRows = 3
//numRows subtracts 1 from 3, gives numRows 2
//numRows subtracts 1 from 2, gives numRows 1
//numRows subtracts 1 from 1, gives numRows 0
//return value of numRows at this point is 0 
//now begins backward phase:
//add numRows 0 + 0 = 0
//add numRows 0 + 1 = 1
//add numRows 1 + 2 = 3
//add numRows 3 + 3 = 6 (last row)
//dotTotal = 6
//see visualization: http://pythontutor.com/visualize.html#code=const%20dotTotal%20%3D%20function%28numRows%29%20%7B%0A%20%20%20%20if%20%28numRows%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20return%200%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%20numRows%20%2B%20dotTotal%28numRows%20-%201%29%0A%20%20%20%20%7D%0A%7D%20%0A%0Aconsole.log%28dotTotal%283%29%29%0A&cumulative=false&curInstr=14&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false