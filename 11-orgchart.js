/* Organizational Chart
Write a recursive function that prints the following org chart. Your output should be shown as below 
with proper indentation to show the hierarchy.
You may store the org chart in an object and send that as an input to your program.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes

*/
const orgChart = (item, level) => {
    if(Array.isArray(item)) {
      item.forEach(person => {
        console.log('   '.repeat(level + 1) + person)      
      })
      return {}
    }
    
    level++
    
    for(thing in item) {
      console.log('   '.repeat(level) + thing)
      orgChart(item[thing], level)
    }
  }
  console.log("Recursive Printing of an Org Chart")
  orgChart(chart, 0)
  console.log('\n/* -------------------------------- */\n')