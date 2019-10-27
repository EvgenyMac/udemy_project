let num =50;
if (num<49) {
    console.log('Wrong');
} else if (num>100) {
    console.log('Too much');
} else {
    console.log('True');
} 


(num == 50) ? console.log("True") : console.log("Wrong");

switch (num) {
    case num < 49:
        console.log('Wrong');   
        break;
    case num >100:
        console.log('Too much');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Whats happend?');
        break;    
}