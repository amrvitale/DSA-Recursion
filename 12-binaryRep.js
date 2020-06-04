/* Binary Representation
Write a recursive function that prints out the binary representation of a given number.
For example, the program should take 3 as an input and print 11 as output,
or 25 as input and print 11001 as output.
Note that the binary representation of 0 should be 0.

//FROM RIGHT HAND SIDE:
//1st digit = 1's column (2^0)
//2nd digit = 2's column (2^1)
//3rd digit = 4's column (2^2)
//4th digit = 8's column (2^3)
//5th digit = 16's column (2^4)
//6th digit = 32's column (2^5)
//7th digit = 64's column (2^6)
//8th digit = 128's column (2^7)
//9th digit = 256's column (2^8)

Decimal:	0	1	2	3	4	    5	    6	    7	    8	    9	    10	    11	    12	    13	    14	    15
Binary:	    0	1	10	11	100	    101 	110	    111	    1000	1001	1010	1011	1100	1101	1110	1111

Decimal:	20	    25	    30	    40	    50	    100	        200	        500
Binary:	    10100	11001	11110	101000	110010	1100100	    11001000	111110100

*/

var number = 6;

function convertDecimalToBinary(number){
    var binary = ""; //set binary to a string
    var temp = number; //grab your # 6
 
    while(temp > 0){ //while 6 > 0 (yes it is!)
        if(temp % 2 == 0){ //6 % 2 is 0
            binary = "0" + binary; // binary is now a string of 0
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2); // 6 divided by 2 = 3, send 3 back up the function again
    } // which will result in 3 % 2  = 1, which tells you to prepend 1 to binary string of 0 (gives you "10")

    return binary;
}

console.log(convertDecimalToBinary(number));



//6 % 2 = 0, //binary number added to 1's column (farthest to right): 0
//6 / 2 = 3, rounded to 3 via Math.floor
//send 3 to function again

// 3 % 2 = 1 //binary number added to the 2's column (to left of 0): 10
// 2 / 2 = 1, rounded to 1 via Math.floor
// send 1 to function again

//1 % 2 = 1, //binary number added to the 4's column (to left of 1): 110
// 1 / 2 = 0.5, rounds to 0 via Math.floor, 
//so line 30 runs => is else, return '' (stop case)

  //http://pythontutor.com/javascript.html#code=function%20binaryRep%28num%29%20%7B%0A%20%20%20%20if%20%28num%20%3E%200%29%20%7B%0A%20%20%20%20%20%20let%20binary%20%3D%20Math.floor%28num%20%25%202%29%3B%0A%20%20%20%20%20%20return%20binaryRep%28Math.floor%28num%20/%202%29%29%20%2B%20binary%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20''%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20console.log%28binaryRep%286%29%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D