let stringFromUser = "1\n3\n5\n6\n3\n1\n2\n3\n3\n5\n6\n7";

const castToArray = stringFromUser.split("\n");

console.log(castToArray);

const uniqueNumbers = new Set(castToArray);
console.log("uniqueNumbers", uniqueNumbers);
