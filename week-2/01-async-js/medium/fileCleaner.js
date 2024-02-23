const fs = require('fs');

const filePath = "text.txt";

//read the file
fs.readFile('text.txt', 'utf-8', (err,data)=>{
     if(err){
        console.log(err);
        return;
     }

     //remove extra spaces
     const cleanedData = data.replace(/\s+/g, ' ');
     //write back to the smae file


     fs.writeFile(filePath, cleanedData, 'utf-8', (err)=>{
        if(err){
            console.error(err);
            return;
        }else{
            console.log(data);
        }
        console.log("file cleaned and written successfully!");
    });
});

 

 