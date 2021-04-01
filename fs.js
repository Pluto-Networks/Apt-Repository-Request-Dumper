const fs = require("fs");

const readFile = async (path, encoding = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

module.exports = {
  readFile,
};
