/*Reverse String
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
*/

const stringReverse = function(string) {
    if (string === "") {
        return ""
    }
    return stringReverse(string.substring(1)) + string.charAt(0)
}

    console.log(stringReverse('Hello'));
    
    //substring method extracts characters from between start and end indexes
    //string. substring(0) would grab nothing and just return the whole string, we don't want that
    //substring(1) chops off the "h", which is our starting point.
    //then substring(1) is now ello 
    //substring repeats: substring(1) returns llo
    //substring repeats: substring(1) returns lo
    //substring repeats: substring(1) returns o
    //substring repeats: substring(1) returns ""
    //charAt takes over
    //charAt returns the character at specified index of the new string, 0, which is first
    //backward phase:
    //charAt climbs "up the chain" with our o character, and places it first: returns o
    //charAt goes backward to lo, l is first, returns ol 
    //charAt goes backward to llo, l is first, returns oll
    //charAt goes backward to ello, e is first, returns olle
    //charAt goes to end at Hello, H is first, returns olleH
    //see visualization on http://pythontutor.com/live.html#code=const%20stringReverse%20%3D%20function%28string%29%20%7B%0A%20%20%20%20if%20%28string%20%3D%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20return%20%22%22%0A%20%20%20%20%7D%0A%20%20%20%20return%20stringReverse%28string.substring%281%29%29%20%2B%20string.charAt%280%29%0A%20%20%20%20%7D%0A%20%20%0A%20%20console.log%28stringReverse%28'Hello'%29%29%3B&cumulative=false&curInstr=26&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
   
