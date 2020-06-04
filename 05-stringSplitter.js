/* String Splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split) 
Do NOT use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"] 
*/
//indexOf returns position of first occurrence of specified value in a string, returns -1 if value never occurs
//substring extracts part of a string, between two indices (not including end index) and returns new sub string


const stringSplitter = function(string, strArr=[]) {

    if (string.indexOf('/') === -1) {
        strArr.push(string)
        return strArr;
    }
    else {   
        strArr.push(string.substring(0, string.indexOf('/')))
        return stringSplitter(string.substring(string.indexOf('/') + 1), strArr);
    }
  }
  
  console.log(stringSplitter('02/20/2020'))

//first it checks our full string, and creates empty array (strArr)
//skips base case since / exists within string 
//for line 20: substring(0, string.indexOf('/'))):
//it says to extract the string starting at the first character up to but not including the /, which is 02
//it pushes it to the array as a string ["02"]
//then it returns the remaining string, minus the / splitter: "20/2020" (not sure if that's what the "(string.indexOf('/') + 1)" is on line 21)
//and it returns our current array ["02"]
//skips base case since / still exists within string 
//extracts string starting at first char up to but not including the /, which is 20
//it pushes it to the array as a string ["02", "20"]
//then it returns the remaining string, minus the / splitter "2020" (throws it away like the other one?)
//then back to the base case, and this time it does === -1, (meaning / is nonexistent)
// so it pushes the remaining string "2020" to the array as a string
//returns new array: ["02", "20", "2020"]

//see visualization: http://pythontutor.com/javascript.html#code=const%20stringSplitter%20%3D%20function%28string,%20strArr%3D%5B%5D%29%20%7B%0A%0A%20%20%20%20if%20%28string.indexOf%28'/'%29%20%3D%3D%3D%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20strArr.push%28string%29%0A%20%20%20%20%20%20%20%20return%20strArr%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%20%20%20%0A%20%20%20%20%20%20%20%20strArr.push%28string.substring%280,string.indexOf%28'/'%29%29%29%0A%20%20%20%20%20%20%20%20return%20stringSplitter%28string.substring%28string.indexOf%28'/'%29%2B1%29,%20strArr%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20console.log%28stringSplitter%28'02/20/2020'%29%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D