const fs = require("fs");

const fileName = "text.txt";
const str = "Lets add extra words in file";

fs.open(fileName, "a", (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.write(fd, str, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(bytes +' bytes written');
      }
    });
  }
});

fs.readFile('text.txt', 'utf-8', (err, data)=>{
    console.log(data);
})
