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

##### 1. Normalization of the data

To add new data in one of these tables, it is necessary to normalize the data.
Adapt the script provided as needed.
The script was written by R. To start, use the command: source("script.R") to execute the script. 

##### 2. Import data in MySQL

Once created .csv files, import them into phpMyAdmin.
Select on the left the table where the date will be imported
Then click "Import".
Import the ".csv file" file and verify the following options:

Format: CSV

Columns separated by: ";" 
Surrounded by columns: "
Escape characters: \t
Lines terminated by: auto

For the "Sequence" files: 
==> In the name of the column enter this: Id, FastqFilename, FastqFilenameMD5, RunId, StudyId, StudyName, CenterName, SubmissionId, SubmissionDate, SampleId, SampleName, IdPop, ExperimentId, InstrumentPlatform, InstrumentModel, LibraryName, RunName, RunBlockName, InsertSize, LibraryLayout, PairedFastq, Withdrawn, WithdrawnDate, Comment, ReadCount, BaseCount, AnalysisGroup

For the "Alignment" files:
==> In the name of the column enter this: IdAlignement, BamFile, BamFileMD5, BaiFile, BaiFileMD5, BasStatisticFile, BasStatisticFileMD5

For the "Population" files: 
==> In the name of the column enter this: IdPop, PopDescription, IdSuperPop, DNAFromBlood, OffspringAvailableFromTrios, SamplesPilot, SamplesPhase1, SamplesFinalPhase, Total

For the "SurPopulation" files: 
==> In the name of the column enter this: IdSuperPop, SuperEthnicGroup

Check the box: The first line of the file contains the names of columns in the table (if this is not checked, the first line is part of the data).

Click "Run".
