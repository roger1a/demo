let a1 = [1, 2, 5, 6, 7, 8];
let a2 = [3, 5, 8, 9];

let a3 = [];
let i = 1;
let j = 1;
let arryitem1 = a1[0];
let arryitem2 = a2[0];

//console.log(x < a1.length);
while (arryitem1 || arryitem2) {
  // console.log(a3);
  console.log(mergearry(a1, a2));
}

function mergearry(a1, a2) {
  if (arryitem1 < arryitem2) {
    a3.push(arryitem1);
    arryitem1 = a1[i];
    i++;
    console.log("if run");
  } else {
    a3.push(arryitem2);
    arryitem2 = a2[j];
    j++;
    console.log("else run");
  }
  return a3;
}
