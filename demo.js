var ts=require("fs");
console.log("Starting");
//var contents=;
//console.log("contents: "+contents);
var config=JSON.parse(ts.readFileSync("config.json"));

console.log("config: "+config);
console.log("Hello "+config.firstname+" "+config.lastname);
	

console.log("Done bro!!");