const fs = require('fs');

const fileNames = [
    "Theory",
    "Composition",
    "Woodwinds",
    "Brass",
    "Percussion",
    "Strings",
    "Keyboards",
    "Technique",
    "How to Read",
    "Sight Reading",
    "Music History",
    "Miscellaneous"
];

for(const name of fileNames){
    fs.createReadStream('MASTER.html')
        .pipe(fs.createWriteStream("forums/"+name+".html"));
}
