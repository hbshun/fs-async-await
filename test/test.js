const fs = require('../index.js');

async function test() {
  const dir = await fs.readdirAsync(__dirname,'utf8');
  console.log(dir);
}

test();