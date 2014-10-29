var parser = require('../index.js');


//var pdf = "./inputs/RFB2.pdf";
//var pdf = "./inputs/RFB1.pdf";
//-------------------
var pdf = "./inputs/PGFN 1.pdf";



parser.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});

//Omit option to extract all text from the pdf file
parser.pdfToText(pdf_path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text    
});

//parser.header.begin = "Emissão em:";
//parser.header.end = "Emissão em:";

function multipleMatch(element, array) {    
    for(i = 0; i < array.length; i++){
        //console.log("Compare:|",element,array[i],element.match(array[i]));
        //if (element.match(array[i]) != null) {
        //    return true;
        //}
        if (element.match(array[i]) != null) {
            //console.log('retornei');
            return true;
        }
    }
    return false;
}

parser.pdfToArray(pdf, function(err, rows) {
    if (err) throw(err);
    //res = RFB(rows);
    res = deal_with_result(rows);

    console.log(res);
    console.log("------------termino pdfToArray-------")
    //parser.toXLS({'b':1},"table.xlsx");
    //console.log("----Fim toXLS-----");
});

function deal_with_result(r){
   return r;
}
