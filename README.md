
# fs-async-await

node >= 7.6.0

File System 中异步API 支持 async/await。

每个异步方法，加上后缀Async变成新的方法。
```
access -> accessAsync
...
```

使用：
```javascript
const fs = require('./fs-async-await')

let readFile = async (filename) => {
  return await fs.readFileAsync(filename);
}
(async () => {
  let content = await readFile(__filename);
  console.log(content.toString());
})();

```
