/*Find all ways out of the maze
modify your solution from 8-maze so it finds All the possible exit paths through the Maze. 
To find all possible exit paths through the maze, think about how many places you can move at each turn. 
Possibly up, down, left or right?

Notice that this maze has 3 exits paths. 
Your recursive function should print all three of the paths with the proper directions. 
For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD

*/

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//need to ask mentor for help