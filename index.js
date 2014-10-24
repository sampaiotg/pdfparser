var /*info = require('./lib/info.js'),
  extract = require('./lib/extract-text.js'),*/
  fs = require('fs');

var pdfUtil = require('pdf-to-text');

function multipleMatch(element, array) {    
    for(i = 0; i < array.length; i++){
        if (element.match(array[i]) != null) {
            return true;
        }
    }
    return false;
}

function Parser() {
    this.header = {'begin': null, 'end': null};
    this.field = [];
    this.structure = undefined;
  if (false === (this instanceof Parser)) {
    return new Parser();
  }
}


Parser.prototype.pdfToText = function(pdf, cb) {
  pdfUtil.pdfToText(pdf, function(err, data) {
    if (err) throw(err);
    cb(null, data); //print all text    
  });
}

Parser.prototype.pdfToArray = function(pdf, cb) {
  pdfUtil.pdfToText(pdf, function(err, data) {
    if (err) throw(err);
    rows = data.split("\r\n");
    res = [];
    for (r = 0; r < rows.length; r++) {
        if (rows[r] == "") continue;
        //columns = rows[r].trim().split(/(\s\s)+/);
        res.push(rows[r].trim().split(/(\s\s)+/)); // split columns
    }
    cb(null, res); //print all text    
  });
}

Parser.prototype.pdfToJSON = function(pdf, cb) {
    //if (this.header.end == null || this.header.begin == null) throw("You need to define at least an header (begin, and end)");
  this.pdfToArray(pdf, function(err, rows) {
    if (err) throw(err);
    var flagHeader = false;
    for (r = 0; r < rows.length; r++) {
        if (this.header != null && rows[r].match(this.header.begin) != null) flagHeader = true;
        else if (this.header != null && rows[r].match(this.header.end) != null) flagHeader = false;
        else if (flagHeader) continue;
        else{
            row = rows[r];
            console.log(row);
            for (c = 0; c < row.length; c++) {
                if (row[c] == "  ") continue;
                field = row[c].split(":");
            }
        }
    }
    cb(null, "end of pdf");
  });
}

module.exports = new Parser();


//var Machine = function Machine() {
//    header = {'begin': null, 'end': null};
//  //if (false === (this instanceof Machine)) {
//  //  return new Machine();
//  //}
//}
//
//
//Machine.prototype.pdfToText = function(pdf, cb) {
//  
//}
//module.exports = Machine;