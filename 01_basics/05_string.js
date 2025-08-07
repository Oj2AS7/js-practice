const name = "ojas"
const repoCount = 50
//console.log(name + repoCount + " value");  //outdated


console.log(`Hello my name is ${name} and repoCount is ${repoCount}`);


const gamename = new String('ojas-kotiyal-com')
console.log(gamename);
console.log(gamename[2]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('a'));


const newstr = gamename.substring(0 ,4)
console.log(newstr);

const anotherstr = gamename.slice(-4 ,8)
console.log(anotherstr)

const newstr1 = "   ojaskotiyal    "
console.log(newstr1)
console.log(newstr1.trim());


const url = "https://ojas.com/ojas%30kotiyal"
console.log(url);
console.log(url.replace('%30', '-'));
console.log(url.includes('ojas'))


console.log(gamename.split('-'))