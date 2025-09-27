// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;      // Press shift option down arrow to duplicate line     
switch (month) {
    case 1:
        console.log("January");  
        break;
    case 2:
        console.log("February");
        break;                         // we use break to stop the execution after matching case otherwise it will execute all the cases after matching case
    case "march":   // we can also use string in case    
        console.log("March");
        break;
    default:
        console.log("Not a valid month");
        break;
}

