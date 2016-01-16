var fs = require('fs');

module.exports.convertStringToCSV = convertStringToCSV;
module.exports.normalizeSequenceData = normalizeSequenceData;


//-------------------------------------------
// Convert the string in CSV
// Input: title (nom du fichier), texte (contenu à sauvegarder) en String
// Output: Void
//-------------------------------------------	
function convertStringToCSV(title, texte, callback) {
	
	var splitText = texte.split('\t');
	
	// Sauvegarder dans un CSV 
	
	var csvContent = ""; 
	splitText.forEach(function(data, index){
		csvContent += data + "\n"; 	
	}); 
	
	fs.writeFile('CSV_file/' + title+'.csv', csvContent, function(err) {

			if (err) {
				callback(err);
			}
			
			callback(null, 'ok');
	});
}

//-------------------------------------------
// Normalize sequence.index file and save it to a CSV file
// Input: title (nom du fichier), texte (contenu à sauvegarder) en String
// Output: Void
//-------------------------------------------	
function normalizeSequenceData(title, texte, callback) {
	
  // Normalize texte 
	var splitText = texte.split('\n');  
    
  for(var i = 1; i < splitText.length - 1 ; i++)
  {
    var line = splitText[i].split('\t');
    
    var md5 = line[1];
    var centerName = line[5]; 
    
    if(md5 == "................................")
    {
      line[1] = "NULL";
    }
    
    line[5] = centerName.toUpperCase();
    
    splitText[i] = line.join('\t'); 
  }
  
//	 Sauvegarder dans un CSV 
	
	var csvContent = ""; 
	splitText.forEach(function(data, index){
		csvContent += data + "\n"; 	
	}); 
	
	fs.writeFile('CSV_file/' + title + '.csv', csvContent, function(err) {

			if (err) {
				callback(err);
			}
			
			callback(null, 'ok');
	});
}



