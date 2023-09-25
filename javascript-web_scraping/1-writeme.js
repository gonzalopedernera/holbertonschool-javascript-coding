#!/usr/bin/node
// Writes a string to a file
const filePath = process.argv[2];
const stringToWrite = process.argv[3];
const moduleImport = require('fs');

moduleImport.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
