var currDate = new Date();
var month1 = currDate.toLocaleDateString('en-US', { month: '2-digit'});
var month2 = currDate.toLocaleDateString('en-US', { month: 'long'});
var month3 = currDate.toLocaleDateString('en-US', { month: 'narrow'});
var month4 = currDate.toLocaleDateString('en-US', { month: 'numeric'});

var month5 = currDate.toLocaleDateString('en-US', { month: 'short'});


if (currDate.getHours() < 3) {
    var dayShort = currDate.getDate() - 1;   
} else {
    var dayShort = currDate.getDate();
}

var dayFull = month5 + dayShort;
var filename = dayFull + ".html"
var todaysPage = "<b>SQUEEKY!</b>";

/* console.log(month1);
console.log(month2);
console.log(month3);
console.log(month4); */
console.log(month5);
console.log(dayShort);
console.log(dayFull);
console.log(filename);

const yFrame = document.getElementById("yFrame");


yFrame.src = filename;



// set URL source to filenmame