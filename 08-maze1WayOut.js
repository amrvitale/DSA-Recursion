/*Find a way out of the maze
You have entered a maze and need to find your way out of it.
There are more than one possible paths throug the maze to the SINGLE EXIT POINT.
Write a recursive function that will help you find a possible path
throug the maze.
You can use the following mazes to test your program: 

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


*/
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

//need to move on and ask mentor for help with this

let maze = [
    ['v', 'v', 'v', '*', ' ', ' ', ' '],
    ['*', '*', 'v', '*', ' ', '*', ' '],
    [' ', ' ', 'v', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  
  function escapeMaze(maze, row=0, col=0, moves='') {
    // break cases
    // final is when value === 'e'
    if (maze[row] && maze[row][col] && maze[row][col] === 'e') {
      return moves;
    }
  
    // do not advance
    // when value is undef or a '*' or visited
    if (!maze[row] || !maze[row][col] || maze[row][col] === '*' || maze[row][col] === 'v') {
      return  false;
    }
  
    //sub routine
    // move and mark as visited
    // running through all scenarios every time
    maze[row][col] = 'v';
    escapeMaze(maze, row+1, col, 'R'+moves); // move right
    escapeMaze(maze, row-1, col, 'L'+moves); // move left
    escapeMaze(maze, row, col+1, 'D'+moves); // move down
    escapeMaze(maze, row, col-1, 'U'+moves); // move up
  }
  
  console.log(escapeMaze(maze));
  //really need help with these maze ones...