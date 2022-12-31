//explanation when i get to it
im sure i could figure out one long regex to fit all this. 
Hold on i have got the single regex to rule them all.
^(1\s?)? one followed by optional whitespace and optional character after that for the dashes and stuff
(\(\d{3}\)|\d{3}) either 3 digits or 3 digits in brackets following above
[\s\-]?\d{3}[\s\-]?\d{4}$  whitespace or dash optional then 3 digits hten whitespace dash optional again followed by 4 digits to close