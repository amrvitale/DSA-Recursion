/*Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number.

The Fibonacci sequence is a series of numbers in which each # is the sum
of the 2 preceding numbers.

For example, the 7th Fibonacci # in a Fibonacci sequence is 13.
Sequence is as follows: 1, 1, 2, 3, 5, 8, 13
*/

const fibonacci = function (n) {
    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1, 1];
    }

    let seq = fibonacci(n - 1);

    seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
    return seq;
}
  
  
  let fibNum = 7
  console.log( fibonacci(fibNum))
//checks line 12, not applicable so skips (7 does not equal 1)
//checks line 16, not applicable so skips (7 does not equal 2)
//creates changeable variable (let) called sequence equal to n - 1, as of yet, undefined
//runs line 20, new n = 6
//checks line 12, not applicable so skips (6 does not equal 1)
//checks line 16, not applicable so skips (6 does not equal 2)
//runs line 20, new n = 5
//checks line 12, not applicable so skips (5 does not equal 1)
//checks line 16, not applicable so skips (5 does not equal 2)
//runs line 20, new n = 4
//checks line 12, not applicable so skips (4 does not equal 1)
//checks line 16, not applicable so skips (4 does not equal 2)
//runs line 20, new n = 3
//checks line 12, not applicable so skips (3 does not equal 1)
//checks line 16, not applicable so skips (3 does not equal 2)
//runs line 20, new n = 2
//checks line 12, not applicable so skips (2 does not equal 1)
//checks line 16 --> 2 = 2, so returns [1, 1]

//runs line 22: seq.length is currently 2
// so for (seq[2 -2]) + seq([2-1]) that's seq([0]) + seq([1]), which for the array[1, 1] 
//means 1 + 1 = 2 (add numbers at index 0 and 1, or last two in array)
//and you push the 2 to the array, getting this: [1, 1, 2]

//runs line 22 again: seq.length is now 3
//so for (seq[3 -2]) + seq([3-1]) that's seq([1]) + seq([2]), which for the array[1, 1, 2]
//means 1 + 2 = 3 (add numbers at index 1 and 2, or last two in array)
//and you push the 3 to the array, getting this: [1, 1, 2, 3] 

//runs line 22 again: seq.length is now 4
//so for (seq[4 -2]) + seq([4-1]) that's seq([2]) + seq([3]), which for the array[1, 1, 2, 3]
//means 2 + 3 = 5 (add numbers at index 2 and 3, or last two in array)
//and you push the 5 to the array, getting this: [1, 1, 2, 3, 5]

//runs line 22 again: seq.length is now 5
//so for (seq[5 -2]) + seq([5-1]) that's seq([3]) + seq([4]), which for the array[1, 1, 2, 3, 5]
//means 3 + 5 = 8 (add numbers at index 3 and 4, or last two in array)
//and you push the 8 to the array, getting this: [1, 1, 2, 3, 5, 8]

//runs line 22 again: seq.length is now 6
//so for (seq[6 -2]) + seq([6-1]) that's seq([4]) + seq([5]), which for the array[1, 1, 2, 3, 5, 8]
//means 5 + 8 = 13 (add numbers at index 4 and 5, or last two in array)
//and you push the 13 to the array, getting this: [1, 1, 2, 3, 5, 8, 13]

//it will stop when fibNum = 7 (or 7 values in array)
//fibNum of 7 = seq.length of 6 (check to make sure that I'm getting this right with mentor...)

//visualize execution: http://pythontutor.com/javascript.html#code=const%20fibonacci%20%3D%20function%20%28n%29%20%7B%0A%20%20%20%20if%20%28n%20%3D%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B1%5D%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20%28n%20%3D%3D%3D%202%29%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B1,%201%5D%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20let%20seq%20%3D%20fibonacci%28n%20-%201%29%3B%0A%0A%20%20%20%20seq.push%28seq%5Bseq.length%20-%202%5D%20%2B%20seq%5Bseq.length%20-%201%5D%29%3B%0A%20%20%20%20return%20seq%3B%0A%7D%0A%20%20%0A%20%20%0A%20%20let%20fibNum%20%3D%207%0A%20%20console.log%28%20fibonacci%28fibNum%29%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

