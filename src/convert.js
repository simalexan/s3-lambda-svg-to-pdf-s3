'use strict';
const childProcess = require('child_process'),
  path = require('path'),
  execPromise = function (command, dir) {
    'use strict';
    return new Promise(function (resolve, reject) {
      childProcess.exec(command, {cwd: dir}, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };
module.exports = function convert(inFile, outFile) {
  return execPromise(`/opt/bin/rsvg-convert "${inFile}" -o "${outFile}" -f pdf`, path.dirname(inFile));
};