let argue = process.argv[2]

let figlet = require('figlet');
figlet(argue, function(error, data) {
if(error) {
  console.log(error);
} else {
  console.log(data);
}
});