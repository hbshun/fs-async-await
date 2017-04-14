'use strict';

const fs = require('fs');
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


/**
 * @params opt
 * @params opt.suffix 'Async'
 */

module.exports = (opt) => {
  opt = opt || {};
  const suffix = opt.suffix || 'Async';
  keys.forEach(key => {
    fs[key + suffix] = function () {
      return new Promise((resolve, reject) => {
        fs[key].apply(fs, Array.prototype.slice.apply(arguments).concat((err, data) => err ? reject(err) : resolve(data)));
      });
    };
  });
  return fs;
};