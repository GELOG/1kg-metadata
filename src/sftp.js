// Voir le module utilisé: https://github.com/sergi/jsftp
var JSFtp = require("jsftp");

var utility = require("./core/utility");

var ftp = new JSFtp({
  host: "ftp.ncbi.nlm.nih.gov",
  port: 21, 
  user: "anonymous",
  pass: "@anonymous" 
});



//1. FTP Metadata Crawler script
exports.list = function(req, res) {
  ftp.list(req.directory, function(err, res) {
    
    utility.convertStringToCSV('files', res, function(err, data){
      console.log(data);
    }); 
  
  });
};

exports.getSequenceFile = function(req, res) {
  
  var str = ""; // Will store the contents of the file
  
  ftp.get(req.directory, function(err, socket) {
    if (err) 
    {
      return;
    }

    socket.on("data", function(d) { 
      str += d.toString(); 
    });
    
    socket.on("close", function(hadErr) {
      if (hadErr)
      {
        console.error('There was an error retrieving the file.');
      }
      
      else 
      {
        utility.normalizeSequenceData('sequences', str, function(err, data){
          console.log(data);
        }); 
      }
    });
    socket.resume();
  });
  
};  
  
// 3. Alignment Metadata script
exports.getAlignment = function(req, res){
  
  ftp.get(req.directory, 'CSV_file/alignments.csv', function(err) {
    if (err)
    {
      console.log(err);
      console.error('There was an error retrieving the file.');
    }
      
    else
    {
      console.log('File copied successfully!');
    } 
  });
};

// 4. Sample script metadata 
exports.getSampleInfo = function(req, res){
  
  ftp.get(req.directory, 'CSV_file/samples.csv', function(err) {
    if (err)
    {
      console.log(err);
      console.error('There was an error retrieving the file.');
    }
      
    else
    {
      console.log('File copied successfully!');
    } 
  });
};


// 5. Population Metadata script
exports.getPopulation = function(req, res){
  
  ftp.get(req.directory, 'CSV_file/populations.csv', function(err) {
    if (err)
    {
      console.log(err);
      console.error('There was an error retrieving the file.');
    }
      
    else
    {
      console.log('File copied successfully!');
    } 
  });
};


// 6. Superpopulation Metadata script
exports.getSuperpopulation = function(req, res){
  
  ftp.get(req.directory, 'CSV_file/superpopulations.csv', function(err) {
    if (err)
    {
      console.log(err);
      console.error('There was an error retrieving the file.');
    }
      
    else
    {
      console.log('File copied successfully!');
    } 
  });
};

