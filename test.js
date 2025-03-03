console.log("hello world")

// variable and constants
const accountId = 144553    // cant modify the value
let accountEmail = "nidhi@google.com"
var accountPassword = "12345"
// accountCity = "Bangalore"
accountEmail = "google.com"
accountPassword = "78965"
// accountCity = "delhi"

console.table([accountId,accountEmail,accountPassword])
let a = 20;
function func(){
    a = 10;
    console.log(a);
}
func()
console.log(a);

let score = 33

console.log(typeof score);
let stringNum = String(score);
console.log(typeof stringNum);
