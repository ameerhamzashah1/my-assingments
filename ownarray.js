// your own array
var myTrans = ["car", " bike", "bus", "train", "aeroplane"];
// 1st method loop
for (var i = 0; i < myTrans.length; i++) {
    console.log("i would like to own a ".concat(myTrans[i]));
}
// 2nd method 
myTrans.map(function (ib) {
    console.log(" i would like to own a ".concat(ib));
});
