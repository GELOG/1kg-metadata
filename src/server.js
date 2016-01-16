var restify     =   require('restify');
var mongojs     =   require('mongojs');
var morgan  	=   require('morgan');

var db          =   mongojs('1000genome', ['sequence','alignment', 'sample']);
var server      =   restify.createServer();
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev')); // LOGGER
 
// CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
 
server.listen(process.env.PORT || 8080, function () {
    console.log("Server started @ ",process.env.PORT || 8080);
});

var sftp = require('./sftp'); 

// 1. FTP Metadata Crawler script
//sftp.list({directory: "/snp/organisms/human_9606/VCF"});

// 2. Sequence Metadata script
sftp.getSequenceFile({directory: "./1000genomes/ftp/sequence.index"});

// 3. Alignment Metadata script
//sftp.getAlignment({directory: "./1000genomes/ftp/alignment.index"});

// 4. Sample script metadata 
//sftp.getSampleInfo(objet);
  
// 5. Population Metadata script
//sftp.getPopulation({directory: "./1000genomes/ftp/20131219.populations.tsv"});

// 6. Superpopulation Metadata script
//sftp.getSuperpopulation({directory: "./1000genomes/ftp/20131219.superpopulations.tsv"});
