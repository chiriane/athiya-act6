function calculateGrade() {
var studentName = parseFloat(document.getElementById('studentName').value);
    var age = parseFloat(document.getElementById('studentAge').value);

var g
if ( age >= 18) {
    g = "adult "; 
}
else if ( age <= 17 ) {
    g = "minor";
};



document.getElementById('total').innerHTML =
        "<p> Student Name: " + studentName + "</p>" +
        "<p> Student Age: " + g + "</p>" ;
    }