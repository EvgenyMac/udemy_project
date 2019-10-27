' use strict ';

let num = 50;
while (num<55) {
    console.log(num);
    num++;
}
var belt = 20025;
do {
    console.log(belt);
    belt++;
}
while (belt<30000);

for(let i = 100; i<200; i++ ) {
    if (i==188) {
        continue;
    }
    console.log(i);
}