var express = require('express');
var multer  = require('multer');
var path    = require("path"); //did not have to use this actualy but I left it here to remind me it exists 
const fs = require('fs');

var upload = multer({ dest: '/home/ubuntu/workspace/' }); //destination for files

var app=express();


app.get('/',function(req,res){
    //send the index page
    res.sendFile(path.join('/home/ubuntu/workspace/myindex.html')); //no need to use path here I am pretty sure
});

app.post('/public', upload.single('filename'), function (req, res, next) {
  
  console.log('done');
  res.json( { "upload staus" : "complete!", "file size": req.file.size});
  res.end(console.log(req.file));
  
  // delete the file to avoid polition of the server
  fs.unlinkSync(req.file.path);
  console.log('successfully deleted');
  
  //read file data and res with file data json
  //delete file
  
});

//listen
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});