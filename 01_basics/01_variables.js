const accountid = 144244
var accountemail = "ojaskotiyal@gmail.com"
let accountpassward = "123456"
accountcity = "delhi"

// accountid = 2 // not allowed becz of const
let accountstate;
accountemail = "ojas.271001@gmail.com"
accountpassward = "100107"
accountcity = "bengluru"
console.log(accountpassward);
console.table([accountemail,accountid,accountpassward,accountcity,accountstate]);

/*
prefer not to use var because of issue in blockscope and functional scope
({}) this create the huge problem
*/