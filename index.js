'use strict';

const fs = require('fs');
const suffix = 'Async';
const keys = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'exists',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchmod',
  'lchown',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'readFile',
  'read',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile',
  'write'
];

keys.forEach(key => {
  fs[`${key}${suffix}`] = (...args) => new Promise((resolve, reject) => {
    fs[key].apply(null, args.concat((err, data) => {
      if ('exists' === key) {
        resolve(err);
      } else {
        err ? reject(err) : resolve(data)
      }
    }));
  });
});

module.exports = fs;