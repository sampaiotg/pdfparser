var parser = require('../index.js');
var pdf = "./input/sample.pdf";

parser.pdfToText(pdf, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text    
});


function multipleMatch(element, array) {    
    for(i = 0; i < array.length; i++){
        if (element.match(array[i]) != null) {
            return true;
        }
    }
    return false;
}

parser.pdfToArray(pdf, function(err, rows) {
    if (err) throw(err);
    res = deal_with_result(rows);
    console.log(res);
    console.log("------------end of pdfToArray-------")
});

function deal_with_result(r){
   return r;
}
