

//CSV
// d3.csv("/data/legoColors.csv", function(data) {
// 	 console.log(data[0]);
// });


//TSV
// d3.tsv("/data/animals.tsv", function(data) {
//   console.log(data[0]);
// });

// JSON
// d3.json("/data/employees.json", function(data) {
//   console.log(data[0]);
// });

// Combos 
// d3.queue()
//   .defer(d3.csv, "/data/legoColors.csv")
//   .defer(d3.tsv, "/data/sample.tsv")
//   .await(analyze);

// function analyze(error, lego, sample) {
//   if(error) { console.log(error); }

//   console.log(cities[0]);
//   console.log(animals[0]);
// }

//HTTP Request
function handle() {
  console.log(this.responseText);
}

var request = new XMLHttpRequest();
request.addEventListener("load", handle);
request.open("GET", "https://pokeapi.co/api/v2/pokemon/");
request.send();