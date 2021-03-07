link = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=konstverk-och-fontaner&q=&rows=600&facet=typ";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        console.log(obj.records[0].fields.namn);
        obj.records.forEach(intoRecord => {
            document.getElementById('output').innerHTML += intoRecord.fields.namn + "<br>";
        });
    } else {
        console.log("Någon fel");
    }
}
request.send();