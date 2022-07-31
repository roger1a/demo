//resverse a string
let name = "Frooti";
let new_name = [];

reverse = (str) => {
  //str.split("")

  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(i)
    new_name.push(str[i]);
  }
  return new_name.join("");
  //return new_name.join(" ").toString() ;
};

//require("./merge2arry");
let { rev, oil } = require("./merge2arry");

//console.log(rev(name));
//console.log(oil);

//console.log(reverse(name))
//rev(name)
//console.log(new_name)
