#!/usr/bin/node
// Reads and prints the content of a file
const filePath = process.argv[2];
const moduleImport = require('fs');

moduleImport.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});