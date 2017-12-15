'use strict';

const assert = require('assert');
const fs = require('..');

const syncResult = {};
syncResult.readdir = fs.readdirSync(__dirname, 'utf8');
syncResult.access = fs.accessSync(__dirname, fs.constants.F_OK);

async function test() {
  const dir = await fs.readdirAsync(__dirname, 'utf8');
  //assert.strictEqual(syncResult.readdir, dir);

  const access = await fs.accessAsync(__dirname, fs.constants.F_OK);
  assert.strictEqual(syncResult.access, access);

  let len = 100;
  let fd = await fs.openAsync('test.js', 'r', '0o666');
  let bf = Buffer.alloc(100);
  let result = await fs.readAsync(fd, bf, 0, 100, null);
  await fs.closeAsync(fd);

  assert.strictEqual(result, len);
}

test().catch(function () {
  console.log(arguments)
});
