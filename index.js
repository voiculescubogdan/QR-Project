import inquirer from "inquirer";
import QR from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "What is the URL?"
    }
  ])
  .then((answers) => {
    console.log(answers);

    var qr_png = QR.image(answers.url, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr_img_bog.png'));

    fs.writeFile("URL_bog.txt", answers.url, function(err) {
      if(err) throw err;
      console.log("Saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
