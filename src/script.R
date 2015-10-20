#####   
##### Code pour normaliser les données des fichiers sequence.index et le sauvegarder en .csv
#####

# Mettre le chemin complet à la place de "sequence.index" 
seq <- read.table("/Users/khaledbenali/Desktop/sequence.index", sep = "\t", header = TRUE, na.strings = "", check.names = FALSE, fill = TRUE)


# Si le fichier est en .csv utiliser la commande suivante 
# seq <- read.csv2("sequence.csv", sep = ";", na.strings = c(""), header = TRUE, check.names = TRUE)
seq[,6]<- toupper(seq[,6])


seq$MD5 <- gsub("\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.\\.", "NULL", seq$MD5)

write.csv2(seq, file='seq.csv', row.names=FALSE)


#####   
##### Code pour les fichiers alignment.index, superpopulation.tsv, population.tsv pour créer un .csv 
#####

# Mettre le chemin complet à la place de "alignment.index" 

# alignement <- read.table("alignment.index", sep = "\t", header = TRUE, check.names = FALSE)
# superpopulation <- read.table("superpopulation.tsv", sep = "\t", header = TRUE, check.names = FALSE)
# population <- read.table("population.tsv", sep = "\t", header = TRUE, check.names = FALSE)

# write.csv2(alignement, file='alignement.csv', row.names=FALSE)

