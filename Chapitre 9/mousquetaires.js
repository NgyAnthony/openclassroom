/**Created by Anthony on 22/05/2017**/
//E1
var mousquetaires = ["Athos","Porthos","Aramis"];
//E2
for (var i = 0 ; i < mousquetaires.length ; i++){
    console.log(mousquetaires[i])
}
var mousquetaire3 = "D'artagnan";

mousquetaires.push(mousquetaire3);

mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire)
})