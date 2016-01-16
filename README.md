# 1000 Genome Project Metadata

## What is the 1000 Genome Project ?
Recent improvements in sequencing technology ("next-gen" sequencing platforms) have sharply reduced the cost of sequencing. The 1000 Genomes Project is the first project to sequence the genomes of a large number of people, to provide a comprehensive resource on human genetic variation.
http://www.1000genomes.org/about

## What is this GitHub project?
The freely available data of the 1000 Genome Project represents more than 600 TB spread over thousands of directories and files. Mirroring this data source is a challenge, and browsing it online is a bit slow. Even documenting this data in a spreadsheet is a challenge (over 2 millions cells).

The original goal of this project is create a database of the metadata of the 1000 Genome Project (filenames, file types, sequencing parameters, file size, nb of reads, etc.) 

## How to use the 1kg metadata project?

For Mac: Download MaMp to be able to create the database.

##### Create the database

Once installed, go to the phpMyAdmin page and click on "Import".
Import "1000genome.sql" file. And click "Run."
The "1000genome.sql" file will create the database "1000Genome", the tables: "Sequence", "Alignment" "Population" and "SuperPopulation".  
Data has already been pre-imported.


##### Add new data

#### Run the server.js file with node

Use the command: node server.js to run the project.

