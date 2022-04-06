const fs = require("fs");
const path = require("path");
module.exports = (filePath, res) => {
  let extName = path.extname(filePath);
  let contentType = "text/html";
  switch (extName) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    // case ".svg":
    //   contentType = "image/svg";
    //   break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      break;
  }

  console.log(`File path: ${filePath}`);
  console.log(`Content-Type: ${contentType}`);
  console.log(`EXTNAME: ${extName}`);

  res.writeHead(200, { "Content-Type": contentType });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};
