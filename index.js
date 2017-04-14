'use strict';

const fs = require('fs');
const suffix = 'Async';
const keys = [
  'access',
  'exists',
  'readFile',
  'close',
  'open',
  'read',
  'write',
  'rename',
  'truncate',
  'ftruncate',
  'rmdir',
  'fdatasync',
  'fsync',
  'mkdir',
  'readdir',
  'fstat',
  'lstat',
  'stat',
  'readlink',
  'symlink',
  'link',
  'unlink',
  'fchmod',
  'lchmod',
  'chmod',
  'lchown',
  'fchown',
  'chown',
  'utimes',
  'futimes',
  'writeFile',
  'appendFile',
  'realpath',
  'mkdtemp'
];

keys.forEach(key => {
  fs[key + suffix] = function() {
    return new Promise((resolve, reject) => {
      fs[key].apply(fs, Array.prototype.slice.apply(arguments).concat((err, data) => err ? reject(err) : resolve(data)));
    });
  };
});

module.exports = fs;