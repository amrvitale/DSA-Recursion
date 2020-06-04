/*Counting Sheep

Write a recursive function that counts how many sheep 
jump over the fence. Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence*/

const sheepMessage = function(numOfSheep){
    if (numOfSheep === 0) {
        return "All sheep jumped over the fence!"
    }
    return `${numOfSheep}: Another sheep jumps over the fence! \n` + sheepMessage(numOfSheep-1)
//returns the number of sheep each time + message until number of sheep is 0, 
//then will run 'all sheep' message
//\n is new line for each message
}
console.log(sheepMessage(3))
